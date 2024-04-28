"use client";

import H6Heading from "@/components/headings/H6Heading";
import Layout from "@/components/layout";
import React, { ChangeEvent, useEffect, useState, Suspense } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Calendar from "moedim";
import Button from "@/components/button";
import Modal from "@/components/modal";
import Success from "@/components/appointment/success";
import { useAuth } from "@/contextapi";
import { MAKE_AN_APPOINTMENT, GET_TIME_DATE } from "@/api/services/auth";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const timeSlots = [
  "08:00AM",
  "09:00AM",
  "10:00AM",
  "11:00AM",
  "12:00PM",
  "01:00PM",
  "02:00PM",
  "03:00PM",
  "04:00PM",
  "05:00PM",
  "06:00PM",
  "07:00PM",
];

interface AppointmentPayload {
  user: string;
  service_name: string;
  time: string;
  address: string;
  date: string;
}

const formatDate = (date: Date): string => {
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const BookAppointment = () => {
  const router = useRouter();
  const { userProfile } = useAuth();

  const userId = userProfile && userProfile[0]?.id;

  const [Appointment, setAppointment] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState("");
  const [address, setAddress] = useState("");
  const [value, setValue] = useState<Date>(new Date());
  const [bookedTimes, setBookedTimes] = useState<{ time: string; date: string }[]>([]);

  const fetchBookedTimes = async () => {
    try {
      const response = await GET_TIME_DATE();
      setBookedTimes(response.data); 
    } catch (error) {
      console.error("Error fetching booked times and dates:", error);
    }
  };

  useEffect(() => {
    fetchBookedTimes();
  }, []); 

  const appointmentDetails: AppointmentPayload = {
    user: userId || "",
    service_name: selectedService,
    address: address,
    time: selectedTime || "",
    date: formatDate(value),
  };

  const validateInputs =
    selectedService === "" || address === "" || !selectedTime || selectedTime.length === 0 || !value;

  const handleTimeClick = (time: string) => {
    if (!isTimeDisabled(time, value)) {
      setSelectedTime(time);
    }
  };

  const handleServiceChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(event.target.value);
  };

  const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };


 const isTimeDisabled = (time: string, selectedDate: Date) => {
  const currentTime = new Date();
  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const [hourPart, period] = time.split(/(?=[AP]M$)/);
  let [hours, minutes] = hourPart.split(":").map(Number);

  if (period === "PM" && hours !== 12) {
    hours += 12;
  } else if (period === "AM" && hours === 12) {
    hours = 0; 
  }
   
  const selectedTime = new Date(selectedDate.getTime());
  selectedTime.setHours(hours, minutes, 0, 0);
  const isPastTime = 
    selectedDate.setHours(0, 0, 0, 0) < currentTime.setHours(0, 0, 0, 0);
  const isBookedTime = bookedTimes.some(bookedTime => bookedTime.time === time && bookedTime.date === formatDate(value));
  return isPastTime || isBookedTime;
  };

  
  const isDateDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const formattedDate = formatDate(date);
    if (date < today) {
      return true;
    }
    const timeSlotsBooked = bookedTimes.filter(time => time.date === formattedDate);
    if (timeSlotsBooked.length === timeSlots.length) {
      return true;
    }
    return false;
  };

  const handleDateChange = (date: Date) => {
    setValue(date);
    setSelectedTime(null);
  };

  const [isLoading, setIsLoading] = useState(false);
  const HandleAppointment = async () => {
    const newBookedTime = { time: selectedTime || "", date: formatDate(value) };
      try {
      setIsLoading(true);
      const response = await MAKE_AN_APPOINTMENT(appointmentDetails);
      if (response.status === 201) {
        setAppointment(true);
        setBookedTimes(prevBookedTimes => [...prevBookedTimes, newBookedTime]);
      }
    } catch (error: any) {
      console.log("appointment booked  failed:", error);
      if (error.response && error.response.status === 401) {
        toast.error(error.response.data.detail);
      } else if (error.response && error.response.status === 500) {
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const HandleClose = () => {
    router.push("/");
  };

  const ServiceSelector = () => {
    const searchParams = useSearchParams();
    useEffect(() => {
      const service = searchParams.get('service');
      if (service) {
        setSelectedService(decodeURIComponent(service));
      }
    }, [searchParams]);
    return null;
  };

  return (
    <Layout activePage="services">
      <div className="px-6 lg:px-[123px] py-[24px] lg:py-[52px]">
        <H6Heading className="text-center font-[600] ">
          Book an appointment
        </H6Heading>
        <Suspense fallback={<div>Loading service details...</div>}>
          <ServiceSelector />
        </Suspense>
        <p
          className={`text-[16px] text-center lg:text-[18px] mt-[8px] lg:mt-[4px]`}
        >
          Please select a day and time for your service
        </p>

        <div className="lg:flex lg:items-center lg:gap-[24px] h-full w-full lg:mt-[52px]">
          <div className="mt-[24px] lg:mt-0 p-[28px] bg-blue100 rounded-[10px] w-full h-[400px]">
            <h5 className="text-center font-[600] lg:text-[18px]">
              Personal Details
            </h5>
            <p
              className={`text-[16px] text-center lg:text-[16px] mt-[8px] lg:mt-[4px]`}
            >
              Please fill out your details correctly
            </p>
            <div className="mt-[32px]">
              <div className="relative">
                <select
                  value={selectedService}
                  onChange={handleServiceChange}
                  disabled={false}
                  className="rounded-[10px] outline-none py-[16px] px-[24px] w-full text-[12px] lg:text-[14px] border border-primary bg-transparent appearance-none"
                >
                  <option value="" disabled>
                    Choose a service
                  </option>
                  <option value="Painting">Painting</option>
                  <option value="Tiling">Tiling</option>
                  <option value="Carpentry">Carpentry</option>
                  <option value="Drywall Repairs">Drywall Repairs</option>
                  <option value="TV Mounting">TV Mounting</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="General Household Maintenance">
                    General Household Maintenance
                  </option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <span className="text-primary mr-[22px]">
                    {selectedService ? (
                      <IoIosArrowDown size={15} color="#000" />
                    ) : (
                      <IoIosArrowUp size={15} color="#000" />
                    )}
                  </span>
                </div>
              </div>

              <input
                type={"text"}
                value={address}
                onChange={handleAddressChange}
                disabled={false}
                placeholder="Address"
                className="py-[16px] px-[24px] w-full  text-[12px] lg:text-[14px] outline-none mt-[24px] border border-primary rounded-[10px]"
              />
            </div>
          </div>

          <div className="w-full bg-blue100 p-[28px] mt-[48px] lg:mt-0 h-[400px] rounded-[10px]">
            <p className={`text-[16px] text-center lg:text-[18px]`}>
              Please pick a date for your service
            </p>

            <div className="mt-[28px] mb-[25px] flex items-center w-full justify-center scale-125">
              <Calendar value={value} onChange={handleDateChange} disabled={isDateDisabled(value)}/>
            </div>
 <div className="mt-[35px] flex items-center justify-center">
  <div className="flex items-center mr-4">
    <div 
      className="w-4 h-4 rounded-full bg-blue mr-2" 
    ></div>
    Active Dates
  </div>
  <div className="flex items-center">
    <div 
      className="w-4 h-4 rounded-full bg-gray-500 mr-2"
    ></div>
    Inactive Dates
  </div>
</div>

          </div>
        </div>

        <div className="mt-[48px] ">
          <h4 className="text-center font-[600] lg:text-[28px]">Time</h4>
          <p
            className={`text-[16px] text-center lg:text-[18px] mt-[8px] lg:mt-[4px]`}
          >
            Pick a time for your service
          </p>
          <div className="mt-[16px] flex flex-row flex-wrap gap-[20px] w-full">
            {timeSlots.map((timeSlot, index) => (
               <div
                key={index}
                className={`rounded-[30px] border cursor-pointer p-4 ${
                  selectedTime === timeSlot
                    ? "border-primary text-primary"
                    : "border"
                } ${isTimeDisabled(timeSlot, value) ? "pointer-events-none text-gray-400 opacity-50" : ""}`}
                onClick={() => handleTimeClick(timeSlot)}
              >
                {timeSlot}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full  flex items-center justify-center mt-[48px] lg:mt-[72px]">
          <Button
            text="Book"
            onClick={HandleAppointment}
            disabled={validateInputs}
            isLoading={isLoading}
            className="w-full text-white text-[16px] lg:text-[18px] lg:w-[40%] font-[700]"
          />
        </div>
      </div>

      {Appointment && (
        <Modal>
          <Success HandleClose={HandleClose} />
        </Modal>
      )}
    </Layout>
  );
};

export default BookAppointment;

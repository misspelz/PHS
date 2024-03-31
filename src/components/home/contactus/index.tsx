"use client";

import H6Heading from "@/components/headings/H6Heading";
import Image from "next/image";
import map from "@/assets/contactmapmobile.svg";
import webmap from "@/assets/Map.svg";
import icon from "@/assets/contactmapimg.svg";
import React, { ChangeEvent, useEffect, useState } from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import Button from "@/components/button";
import Link from "next/link";
import { CONTACT } from "@/api/services/auth";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [payload, setPayload] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const validateInputs = () => {
    return Object.values(payload).every((value) => value !== "");
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setPayload((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const HandleContactForm = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await CONTACT(payload);
      console.log("contact form successful:", response);
      if (response.status === 200) {
        setShowSuccess(true);
      }
    } catch (error: any) {
      console.log("contact form failed:", error);
      if (error.response && error.response.status === 400) {
        setShowError(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <div id="contact" className=" py-[48px] bg-skyblue">
      {" "}
      <H6Heading className="text-center font-[600] ">Contact</H6Heading>
      <p className={`text-[16px] text-center lg:text-[18px] `}>
        Get in touch with us
      </p>
      <div className="mt-[28px] relative h-[570px] lg:h-[920px] flex flex-col  items-center lg:px-[123px] ">
        <div className="w-full flex justify-center">
          <Image src={map} alt="image" className="lg:hidden w-full" />
          <Image src={webmap} alt="image" className="hidden lg:flex" />
        </div>

        <div className="bg-white w-[95%] mx-auto absolute top-24 lg:top-[400px] flex shadow-md lg:w-[900px]">
          <form
            className="w-[60%] py-[24px] px-[10px] lg:px-[36px]"
            onSubmit={HandleContactForm}
          >
            <div className="px-[10px] w-full">
              <p className="text-[12px] font-[500] lg:text-[18px]">
                Send us a message
              </p>

              <div className="mt-[16px]">
                <input
                  type="text"
                  placeholder="What is your name?"
                  name="name"
                  value={payload.name}
                  onChange={handleChange}
                  className="px-[24px] py-[16px] w-full border rounded-[10px] text-[12px] lg:text-[14px] outline-none"
                />
              </div>
              <div className="mt-[16px]">
                <input
                  type="text"
                  placeholder="Email *"
                  name="email"
                  value={payload.email}
                  onChange={handleChange}
                  className="px-[24px] py-[16px] w-full border rounded-[10px] text-[12px] lg:text-[14px] outline-none"
                />
              </div>
              <div className="mt-[16px]">
                <input
                  type="text"
                  placeholder="Phone *"
                  name="phone_number"
                  value={payload.phone_number}
                  onChange={handleChange}
                  className="px-[24px] py-[16px] w-full border rounded-[10px] text-[12px] lg:text-[14px] outline-none"
                />
              </div>
              <div className="mt-[16px]">
                <textarea
                  cols={30}
                  rows={3}
                  placeholder="Message"
                  name="message"
                  value={payload.message}
                  onChange={handleChange}
                  className="pl-[24px] py-[16px] w-full border rounded-[10px] text-[12px] lg:text-[14px] outline-none"
                />
              </div>

              {showSuccess && (
                <p className="mt-[16px] text-center font-semibold text-primary text-[12px] lg:text-[16px] ">
                  Your message has been sent!
                </p>
              )}

              {showError && (
                <p className="mt-[16px] text-center font-semibold text-red-600 text-[12px] lg:text-[16px] ">
                  Something went wrong!
                </p>
              )}

              <div className="lg:flex lg:items-center lg:gap-[20px]">
                <Button
                  text="Submit"
                  disabled={!validateInputs()}
                  isLoading={isLoading}
                  className=" text-white mt-[16px]"
                />

                <p className="text-[10px] lg:text-[14px] mt-[12px]">
                  Thank you for contacting us! You will get a reply soon
                </p>
              </div>
            </div>
          </form>

          {/* Contact Information */}
          <div className="w-[40%] bg-primary font-[500] text-white py-[24px] px-[10px] lg:px-[36px]">
            <p className="text-[12px] lg:text-[18px]">Contact Information</p>

            <div className="flex flex-col gap-[20px]  mt-[16px]">
              <div className="flex flex-col gap-[8px]">
                <Image src={icon} alt="image" className="" />
                <p className="text-[12px] lg:text-[14px]">
                  Ringfort View, Balrothery, Balbriggan, Dublin
                </p>
              </div>

              <div className="flex flex-col gap-[8px]">
                <Image src={icon} alt="image" className="" />
                <p className="text-[12px] lg:text-[14px]">+353 89 266 0336</p>
              </div>

              <div className="flex flex-col gap-[8px]">
                <Image src={icon} alt="image" className="" />
                <p className="text-[12px] lg:text-[14px]">
                  www.princehandy manservices.ie
                </p>
              </div>
            </div>

            <div className="flex mt-[20px] gap-[20px]">
              <div className="p-1 bg-white rounded-full">
                <Link
                  href="https://web.facebook.com/people/Prince-Handyman-Services/61552184172583/"
                  target="_blank"
                >
                  <SlSocialFacebook size={20} color="black" />
                </Link>
              </div>
              <div className="p-1 bg-white rounded-full">
                <Link
                  href="https://www.instagram.com/prince_handyman_services?igsh=MWJvcHhsNnowY3lqdQ%3D%3D&utm_source=qr"
                  target="_blank"
                >
                  <FaInstagram size={20} color="black" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

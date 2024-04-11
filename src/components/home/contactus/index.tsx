"use client";

import H6Heading from "@/components/headings/H6Heading";
import Image from "next/image";
import map from "@/assets/mMap.svg";
import webmap from "@/assets/Map.svg";
import icon from "@/assets/contactmapimg.svg";
import contacticon from "@/assets/phswebbcontacticon.svg";
import emailicon from "@/assets/phswebemailicon.svg";
import locationmobileicon from "@/assets/phslocationicon.svg";
import contactmobileicon from "@/assets/phscontacticon.svg";
import emailmobileicon from "@/assets/phsemailicon.svg";
import React, { useEffect, useState } from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import Button from "@/components/button";
import Link from "next/link";
import { CONTACT } from "@/api/services/auth";
import { MdDriveFolderUpload } from "react-icons/md";

interface PayloadType {
  name: string;
  email: string;
  phone_number: string;
  message: string;
  image: File | null;
}

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [payload, setPayload] = useState<PayloadType>({
    name: "",
    email: "",
    phone_number: "",
    message: "",
    image: null,
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

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setPayload((prevFormData) => ({
        ...prevFormData,
        image: file,
      }));
    }
  };

  const HandleContactForm = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();

    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("name", payload.name);
      formData.append("email", payload.email);
      formData.append("phone_number", payload.phone_number);
      formData.append("message", payload.message);

      if (payload.image) {
        formData.append("image", payload.image);
      }

      const response = await CONTACT(formData);
      console.log("contact form successful:", response);
      if (response.status === 200) {
        setShowSuccess(true);
        setPayload({
          name: "",
          email: "",
          phone_number: "",
          message: "",
          image: null,
        });
      }
    } catch (error: any) {
      console.log("contact form failed:", error);
      if (
        error?.response &&
        error?.response?.status === 400 &&
        error?.response?.data?.image[0]
      ) {
        setErrorMessage(
          "Only allowed image types are png and jpg and should not be more than 2mb"
        );
      } else if (
        error?.response &&
        error?.response?.status === 400 &&
        error?.response?.data?.email[0]
      ) {
        setErrorMessage(error.response?.data?.email[0]);
      } else {
        setErrorMessage("Something went wrong!");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 4000);

      return () => clearTimeout(timer);
    }

    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [showSuccess, errorMessage]);

  return (
    <div id="contact" className=" py-[48px] bg-skyblue">
      {" "}
      <H6Heading className="text-center font-[600] ">Contact</H6Heading>
      <p className={`text-[16px] text-center lg:text-[18px] `}>
        Get in touch with us
      </p>
      <div className="mt-[28px] relative h-[800px] lg:h-[920px] flex flex-col  items-center lg:px-[123px] ">
        <div className="w-full flex justify-center">
          <Image
            src={map}
            alt="image"
            className="lg:hidden w-full"
            // width={auto}
            // height={auto}
          />
          <Image
            src={webmap}
            alt="image"
            className="hidden lg:flex"
            // width={40}
            // height={40}
          />
        </div>

        <div className="bg-white w-[90%] mx-auto absolute top-32 lg:top-[400px] flex flex-col lg:flex-row shadow-md lg:w-[900px]">
          <form
            className="lg:w-[60%] py-[24px] px-[10px] lg:px-[36px]"
            onSubmit={HandleContactForm}
            encType="multipart/form-data"
          >
            <div className="px-[10px] w-full">
              <p className="text-[12px] font-[500] lg:text-[18px] text">
                Send us a message
              </p>

              <div className="mt-[16px]">
                <input
                  type="text"
                  placeholder="What is your name?"
                  name="name"
                  value={payload.name}
                  onChange={handleChange}
                  className="px-[24px] py-[10px] lg:py-[16px] w-full border border-inputBorder rounded-[10px] text-[12px] lg:text-[14px] outline-none"
                />
              </div>
              <div className="mt-[16px]">
                <input
                  type="text"
                  placeholder="Email *"
                  name="email"
                  value={payload.email}
                  onChange={handleChange}
                  className="px-[24px] py-[10px] lg:py-[16px] w-full border border-inputBorder rounded-[10px] text-[12px] lg:text-[14px] outline-none"
                />
              </div>
              <div className="mt-[16px]">
                <input
                  type="text"
                  placeholder="Phone *"
                  name="phone_number"
                  value={payload.phone_number}
                  onChange={handleChange}
                  className="px-[24px] py-[10px] lg:py-[16px] w-full border border-inputBorder rounded-[10px] text-[12px] lg:text-[14px] outline-none"
                />
              </div>
              <div className="mt-[16px]">
                <div className=" flex flex-col lg:hidden items-start gap-[16px]">
                  <textarea
                    cols={30}
                    rows={1}
                    placeholder="Message"
                    name="message"
                    value={payload.message}
                    onChange={handleChange}
                    className="pl-[24px] py-[16px] w-full border border-inputBorder rounded-[10px] text-[12px] lg:text-[14px] outline-none"
                  />

                  {/* {payload.image ? (
                    <p className="text-[14px]">{payload.image.name}</p>
                  ) : ( */}
                  <div className="flex items-center gap-10">
                    {" "}
                    <input
                      type="file"
                      accept="image/*"
                      name="image"
                      onChange={handleImageChange}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="flex flex-col items-center gap-[4px] cursor-pointer"
                    >
                      <MdDriveFolderUpload size={24} />
                      <p className="text-[14px]"> Upload Image</p>
                    </label>
                    {payload.image && (
                      <p className="text-[14px]">{payload.image.name}</p>
                    )}
                  </div>
                  {/* )} */}
                </div>

                <div className=" items-center hidden lg:flex gap-4">
                  <textarea
                    cols={30}
                    rows={3}
                    placeholder="Message"
                    name="message"
                    value={payload.message}
                    onChange={handleChange}
                    className="pl-[24px] py-[16px] w-full border border-inputBorder rounded-[10px] text-[12px] lg:text-[14px] outline-none"
                  />
                  {/* {payload.image ? (
                    <div className=" w-[150px] ">
                      <p className="text-[14px]">{payload.image.name}</p>
                    </div>
                  ) : ( */}
                  <div className="">
                    <input
                      type="file"
                      accept="image/*"
                      name="image"
                      onChange={handleImageChange}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="flex flex-col items-center gap-[4px] w-[120px] cursor-pointer"
                    >
                      <MdDriveFolderUpload size={24} />
                      <p className="text-[14px]"> Upload Image</p>
                    </label>
                    {payload.image && (
                      <p className="text-[14px] text-center">
                        {payload.image.name}
                      </p>
                    )}
                  </div>
                  {/* )} */}
                </div>
              </div>

              {showSuccess && (
                <p className="mt-[16px] text-center font-semibold text-primary text-[12px] lg:text-[16px] ">
                  Your message has been sent!
                </p>
              )}

              {errorMessage && (
                <p className="mt-[16px] text-center font-semibold text-red-600 text-[12px] lg:text-[16px] ">
                  {errorMessage}
                </p>
              )}

              <div className="lg:flex lg:items-center lg:gap-[63px]">
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
          <div className="lg:w-[40%] bg-primary font-[500] text-white py-[24px] px-[20px] lg:px-[36px]">
            <p className="text-[12px] lg:text-[18px]">Contact Information</p>

            <div className="flex flex-col gap-[20px] lg:gap-[32px]  mt-[16px] justify-center">
              <div className="flex gap-[8px] lg:gap-[16px] items-center">
                <Image
                  src={icon}
                  alt="image"
                  className="hidden lg:flex"
                  width={20}
                  height={20}
                />
                <Image
                  src={locationmobileicon}
                  alt="image"
                  className="flex lg:hidden"
                  width={20}
                  height={20}
                />
                <p className="text-[12px] lg:text-[14px]">
                  Ringfort View, Balrothery, Balbriggan, Dublin
                </p>
              </div>

              <div className="flex  gap-[8px] lg:gap-[16px] items-center">
                <Image
                  src={contacticon}
                  alt="image"
                  className="hidden lg:flex"
                  width={20}
                  height={20}
                />
                <Image
                  src={contactmobileicon}
                  alt="image"
                  className="flex lg:hidden"
                  width={20}
                  height={20}
                />
                <p className="text-[12px] lg:text-[14px] items-center">
                  +353 89 266 0336
                </p>
              </div>

              <div className="flex  gap-[8px] lg:gap-[16px]">
                <Image
                  src={emailicon}
                  alt="image"
                  className="hidden lg:flex"
                  width={20}
                  height={20}
                />
                <Image
                  src={emailmobileicon}
                  alt="image"
                  className="flex lg:hidden"
                  width={20}
                  height={20}
                />
                <p className="text-[12px] lg:text-[14px]">
                  www.princehandymanservices.ie
                </p>
              </div>
            </div>

            <div className="flex mt-[20px] gap-[20px] lg:mt-[24px]">
              <div className="p-1 bg-white rounded-full">
                <Link
                  href="https://web.facebook.com/people/Prince-Handyman-Services/61552184172583/"
                  target="_blank"
                >
                  <SlSocialFacebook
                    size={15}
                    color="black"
                    className="flex lg:hidden"
                  />
                  <SlSocialFacebook
                    size={20}
                    color="black"
                    className="hidden lg:flex"
                  />
                </Link>
              </div>
              <div className="p-1 bg-white rounded-full">
                <Link
                  href="https://www.instagram.com/prince_handyman_services?igsh=MWJvcHhsNnowY3lqdQ%3D%3D&utm_source=qr"
                  target="_blank"
                >
                  <FaInstagram
                    size={15}
                    color="black"
                    className="flex lg:hidden"
                  />
                  <FaInstagram
                    size={20}
                    color="black"
                    className="hidden lg:flex"
                  />
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

"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assets/phslogo.svg";
import mobilelogo from "@/assets/mobilelogo.svg";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Button from "@/components/button";
import close from "@/assets/profileclose.svg";
import succesimg from "@/assets/profilesuccess.svg";

const NewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const HandleCreatePassword = () => {
    setSuccess(true);
  };

  const HandleClose = () => {
    setSuccess(false);
  };
  return (
    <>
      {!success && (
        <div className="px-6 lg:px-[123px] ">
          <div className="  w-full py-[30px]">
            <Link href="/">
              {" "}
              <Image src={mobilelogo} alt="logo" className="lg:hidden" />
              <Image src={logo} alt="logo" className="hidden lg:flex" />
            </Link>
          </div>
          <p className="text-[18px] lg:text-[28px]  font-[600] mt-[48px] text-center">
            New Password
          </p>
          <p className="mt-2 text-center lg:text-[18px] ">
            Create a new password that is safe and easy to remeber
          </p>

          <div className="max-w-[600px] w-full mx-auto">
            <div className="relative w-full border  flex rounded-[10px] mt-[24px]">
              <input
                type={showPassword ? "text" : "password"}
                onChange={() => {}}
                disabled={false}
                placeholder="Password"
                className="py-[16px] w-full px-[24px]  text-[12px] lg:text-[14px] outline-none"
              />
              <button
                onClick={togglePasswordVisibility}
                type="button"
                className="px-[24px]"
              >
                {showPassword ? (
                  <IoMdEyeOff size={20} color="#000" />
                ) : (
                  <IoMdEye size={20} color="#000" />
                )}
              </button>
            </div>
            <div className="relative w-full border  flex rounded-[10px] mt-[24px]">
              <input
                type={showPassword ? "text" : "password"}
                onChange={() => {}}
                disabled={false}
                placeholder="Confirm Password"
                className="py-[16px] w-full px-[24px]  text-[12px] lg:text-[14px] outline-none"
              />
              <button
                onClick={togglePasswordVisibility}
                type="button"
                className="px-[24px]"
              >
                {showPassword ? (
                  <IoMdEyeOff size={20} color="#000" />
                ) : (
                  <IoMdEye size={20} color="#000" />
                )}
              </button>
            </div>
            <Button
              text="Create Password"
              onClick={HandleCreatePassword}
              className=" text-white mt-[80px] w-full py-[16px]"
            />
          </div>
        </div>
      )}

      {success && (
        <div className="px-6 lg:px-[123px] py-[30px] h-screen ">
          <div className="flex w-full justify-end">
            <Image src={close} alt="close-icon" onClick={HandleClose} />
          </div>

          <div className="flex flex-col items-center justify-center h-full max-w-[600px] w-full mx-auto">
            <Image src={succesimg} alt="close-icon" className="" />
            <p className="text-[18px] lg:text-[28px]  font-[600] mt-[24px] text-center">
              Well done
            </p>
            <p className="mt-[4px] text-center lg:text-[18px] ">
              Your password has been created successfully
            </p>
            <Link href="/login" className="w-full">
              <Button
                text="Login"
                className=" text-white mt-[80px] w-full py-[16px]"
              />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NewPassword;

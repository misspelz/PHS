"use client";

import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import logo from "@/assets/phslogo.svg";
import mobilelogo from "@/assets/mobilelogo.svg";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Button from "@/components/button";
import close from "@/assets/profileclose.svg";
import succesimg from "@/assets/profilesuccess.svg";
import { useAuth } from "@/contextapi";
import { RESET_PASSWORD } from "@/api/services/auth";
import { useRouter } from "next/navigation";

const NewPassword = () => {
  const { userId } = useAuth();
  console.log("userId", userId);

  const nav = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const [payload, setPayload] = useState({
    new_password: "",
    confirm_password: "",
    user_id: userId,
  });

  const validateInputs =
    payload.new_password === "" || payload.confirm_password === "";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayload((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const HandleCreatePassword = async () => {
    try {
      setIsLoading(true);
      const response = await RESET_PASSWORD(payload);
      console.log("password created!:", response);
      if (response.status === 200) {
        setSuccess(true);
      }
    } catch (error: any) {
      console.log("password creation failed:", error);
      if (error.response && error.response.status === 400) {
        setShowError(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const HandleClose = () => {
    nav.push("/login");
    // setSuccess(false);
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
                disabled={false}
                placeholder="New Password"
                name="new_password"
                value={payload.new_password}
                onChange={handleChange}
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
                disabled={false}
                placeholder="Confirm Password"
                name="confirm_password"
                value={payload.confirm_password}
                onChange={handleChange}
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
            {showError && (
              <p className="mt-[24px] text-center font-semibold text-red-600 text-[12px] lg:text-[16px] ">
                Something went wrong!
              </p>
            )}
            <Button
              text="Create Password"
              onClick={HandleCreatePassword}
              disabled={validateInputs}
              isLoading={isLoading}
              className=" text-white mt-[24px] w-full py-[16px]"
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

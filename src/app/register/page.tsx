"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assets/phslogo.svg";
import mobilelogo from "@/assets/mobilelogo.svg";
import Button from "@/components/button";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import Profile from "@/components/profile";

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>();
  const [showProfile, setShowProfile] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowProfile(true);
  };

  const isPhoneNumberEmpty = !phoneNumber || phoneNumber.trim() === "";

  // const isPhoneNumberValid = phoneNumber && /^\d{10}$/.test(phoneNumber);

  // const isButtonDisabled = isPhoneNumberEmpty || !isPhoneNumberValid;

  return (
    <>
      {!showProfile && (
        <div className="px-6 lg:px-[123px] h-screen">
          <div className="  w-full py-[30px]">
            <Link href="/">
              {" "}
              <Image src={mobilelogo} alt="logo" className="lg:hidden" />
              <Image src={logo} alt="logo" className="hidden lg:flex" />
            </Link>
          </div>
          <p className="text-[18px] lg:text-[28px]  font-[600] mt-[48px] text-center">
            Create your account
          </p>
          <p className="mt-2 text-center text-[12px] lg:text-[16px] ">
            Enter your mobile number to continue
          </p>

          <form
            className="max-w-[600px] w-full mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="mt-[24px] py-[16px] px-[24px] border rounded-[10px]">
              <PhoneInput
                international
                defaultCountry="NG"
                value={phoneNumber}
                onChange={setPhoneNumber}
                style={{ outline: "none" }}
                className="phone-input outline-none text-[12px] lg:text-[14px]"
              />
            </div>

            <div>
              <Button
                text="Continue"
                className=" text-white mt-[80px] w-full py-[16px]"
                disabled={isPhoneNumberEmpty}
              />
            </div>
          </form>

          <Link href="/login">
            <p className="mt-[16px]  text-center font-[500] text-[12px] lg:text-[16px]">
              Already have an account?{" "}
              <span className="text-blue">Sign in</span>
            </p>
          </Link>
        </div>
      )}

      {showProfile && <Profile phoneNumber={phoneNumber} />}
    </>
  );
};

export default Register;

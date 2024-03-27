"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assets/phslogo.svg";
import mobilelogo from "@/assets/mobilelogo.svg";
import Button from "@/components/button";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Register = () => {
  const [value, setValue] = useState<string | undefined>();
  return (
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
      <p className="mt-2 text-center lg:text-[18px] ">Enter your mobile number to continue</p>

      <div className="max-w-[600px] w-full mx-auto">
        <div className="mt-[24px] py-[16px] px-[24px] border rounded-[10px]">
          <PhoneInput
            international
            defaultCountry="NG"
            value={value}
            onChange={setValue}
            className="outline-none text-lightgray"
          />
        </div>

        <div>
          <Link href="/profile">
            <Button
              text="Continue"
              className=" text-white mt-[80px] w-full py-[16px]"
            />
          </Link>
        </div>
      </div>

      <Link href="/login">
        <p className="mt-[16px]  text-center font-[500]">
          Already have an account? <span className="text-blue">Sign In</span>
        </p>
      </Link>
    </div>
  );
};

export default Register;

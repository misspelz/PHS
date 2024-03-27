"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/assets/phslogo.svg";
import mobilelogo from "@/assets/mobilelogo.svg";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Button from "@/components/button";
import LogoButton from "@/components/button/btnwithlogo";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contextapi";

const Login = () => {
  const { profile, setProfile } = useAuth();
  const nav = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const HandleClick = () => {
    nav.push("/forgotpassword");
  };

  const HandleLogin = () => {
    setProfile(true);
    nav.push("/");
  };

  return (
    <div className="px-6 lg:px-[123px]">
      {" "}
      <div className="  w-full py-[30px]">
        <Link href="/">
          {" "}
          <Image src={mobilelogo} alt="logo" className="lg:hidden" />
          <Image src={logo} alt="logo" className="hidden lg:flex" />
        </Link>
      </div>
      <p className="text-[18px] lg:text-[28px] font-[600] mt-[48px] text-center">
        Login to your account
      </p>
      <div className="max-w-[600px] w-full mx-auto">
        <div>
          <div className="relative w-full border  flex rounded-[10px] mt-[24px]">
            <input
              type={"text"}
              onChange={() => {}}
              disabled={false}
              placeholder="Email"
              className="py-[16px] px-[24px] w-full  text-[12px] lg:text-[14px] outline-none"
            />
          </div>
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
          <div className=" mt-[24px] flex justify-between w-full">
            <div className="w-full flex items-center gap-2">
              <input
                type={"checkbox"}
                onChange={() => {}}
                disabled={false}
                placeholder="Password"
                className="rounded-[10px] outline-none"
              />
              <p className="font-[500] ">Keep me logged in</p>
            </div>
            <div className="w-full">
              <p
                onClick={HandleClick}
                className="cursor-pointer font-[500] text-right"
              >
                Forgot password?
              </p>
            </div>
          </div>
        </div>
        <Button
          text="Login"
          onClick={HandleLogin}
          className=" text-white mt-[80px] w-full py-[16px]"
        />
        <LogoButton
          text="Continue with google"
          className=" mt-[24px] w-full py-[16px]"
        />
      </div>
      <Link href="/register">
        <p className="mt-[16px] text-center font-[500] mb-[24px]">
          Don’t have an account? <span className="text-blue">Sign Up</span>
        </p>
      </Link>
    </div>
  );
};

export default Login;

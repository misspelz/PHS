"use client";

import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import logo from "@/assets/phslogo.svg";
import mobilelogo from "@/assets/mobilelogo.svg";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contextapi";
import { LOG_IN } from "@/api/services/auth";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
//import GoogleLogin from "react-google-login";
import axios from "axios";

const Login = () => {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";

  const { keepLoggedIn, setKeepLoggedIn } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const nav = useRouter();

  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const validateInputs = () => {
    return Object.values(payload).every((value) => value !== "");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayload((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const HandleClick = () => {
    nav.push("/forgotpassword");
  };

  const HandleLogin = async () => {
    try {
      setIsLoading(true);
      const response = await LOG_IN(payload);
      console.log("Login successful:", response);
      if (response.status === 200) {
        localStorage.setItem("phsAuthToken", response.data.auth_token);
        if (keepLoggedIn) {
          localStorage.setItem("PHS_LoggedInUser", "true");
        }
        nav.push("/");
      }
    } catch (error: any) {
      console.log("Login failed:", error);
      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data.non_field_errors[0]
      ) {
        setShowError(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeepLoggedInChange = () => {
    setKeepLoggedIn((prevKeepLoggedIn) => !prevKeepLoggedIn);
  };

  const onSuccess = async (credentialResponse: any) => {
    try {
      const res = await axios.post(
        "https://princehandymanservices.onrender.com/accounts/google/login/callback/",
        { access_token: credentialResponse.accessToken }
      );
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onFailure = () => {
    console.log("Login failed");
  };

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
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
                type="email"
                disabled={false}
                placeholder="Email"
                name="email"
                value={payload.email}
                onChange={handleChange}
                className="py-[16px] px-[24px] w-full rounded-[10px]   text-[12px] lg:text-[14px] outline-none"
              />
            </div>

            <div className="relative w-full border  flex rounded-[10px] mt-[24px]">
              <input
                type={showPassword ? "text" : "password"}
                disabled={false}
                placeholder="Password"
                name="password"
                value={payload.password}
                onChange={handleChange}
                className="py-[16px] w-full px-[24px] rounded-l-[10px]   text-[12px] lg:text-[14px] outline-none"
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
                Unable to log in with provided credentials.
              </p>
            )}
            <div className=" mt-[24px] flex justify-between w-full">
              <div className="w-full flex items-center gap-2">
                <input
                  type={"checkbox"}
                  disabled={false}
                  onChange={handleKeepLoggedInChange}
                  checked={keepLoggedIn}
                  className="rounded-[10px] outline-none"
                />
                <p className="font-[500] text-[12px] lg:text-[16px]">
                  Keep me logged in
                </p>
              </div>
              <div className="w-full">
                <p
                  onClick={HandleClick}
                  className="cursor-pointer font-[500] text-right text-[12px] lg:text-[16px]"
                >
                  Forgot password?
                </p>
              </div>
            </div>
          </div>
          <Button
            text="Login"
            onClick={HandleLogin}
            disabled={!validateInputs()}
            isLoading={isLoading}
            className=" text-white mt-[80px] w-full py-[16px]"
          />
          <GoogleLogin
            onSuccess={onSuccess}
            onError={onFailure}
            cookiePolicy={"single_host_origin"}
            className="cursor-pointer mt-[24px] w-full"
          >
             Continue With Google
          </GoogleLogin>
        </div>
        <Link href="/register">
          <p className="mt-[16px] text-center font-[500] mb-[24px] text-[12px] lg:text-[16px]">
            Don’t have an account? <span className="text-blue">Sign up</span>
          </p>
        </Link>
      </div>
      </GoogleOAuthProvider>
    </>
  );
};

export default Login;

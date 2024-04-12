"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/phslogo.svg";
import mobilelogo from "@/assets/mobilelogo.svg";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { FORGOT_PASSWORD, VERIFY_OTP } from "@/api/services/auth";
import { useAuth } from "@/contextapi";

interface InputValues {
  inputValue1: string;
  inputValue2: string;
  inputValue3: string;
  inputValue4: string;
  inputValue5: string;
  inputValue6: string;
}

const ForgotPassword = () => {
  const { userId, setUserId } = useAuth();
  const [code, setCode] = useState(false);
  const [showError, setShowError] = useState(false);
  
  const [showErrorr, setShowErrorr] = useState(false);
  const [inputValues, setInputValues] = useState<InputValues>({
    inputValue1: "",
    inputValue2: "",
    inputValue3: "",
    inputValue4: "",
    inputValue5: "",
    inputValue6: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const [payload, setPayload] = useState({
    email: "",
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

  const [resendTimer, setResendTimer] = useState<number>(60);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const HandleContinue = async () => {
    try {
      setIsLoading(true);
      const response = await FORGOT_PASSWORD(payload);
      console.log("otp sent successful:", response);
      if (response.status === 200) {
        setUserId(response.data.user_id);
        setCode(true);
      }
    } catch (error: any) {
      console.log("otp failed:", error);
      if (error.response && error.response.status === 400) {
        setShowErrorr(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const nav = useRouter();

  const HandleConfirm = async () => {
    try {
      setLoading(true);
      setResendTimer(0);
      const otp = Object.values(inputValues).join("");
      const response = await VERIFY_OTP({ user_id: userId, token: otp });
      console.log("otp confirmed!:", response);
      if (response.status === 200) {
        nav.push("/newpassword");
      }
    } catch (error: any) {
      console.log("otp confirmation failed:", error);
      if (error.response && error.response.status === 400) {
        setShowError(true);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputNumber: number
  ) => {
    const value = e.target.value;
    if (value.length <= 1) {
      setInputValues((prevState) => ({
        ...prevState,
        [`inputValue${inputNumber}` as keyof InputValues]: value,
      }));

      if (
        value.length === 1 &&
        inputNumber < 6 &&
        inputRefs.current[inputNumber]
      ) {
        inputRefs.current[inputNumber]?.focus();
      }
    }
  };

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0]?.focus();
    }
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleResendCode = () => {
    HandleContinue();
    setInputValues({
      inputValue1: "",
      inputValue2: "",
      inputValue3: "",
      inputValue4: "",
      inputValue5: "",
      inputValue6: "",
    });
    setResendTimer(60);
  };

  return (
    <div className="px-6 lg:px-[123px]">
      <div className="  w-full py-[30px]">
        <Link href="/">
          {" "}
          <Image src={mobilelogo} alt="logo" className="lg:hidden" />
          <Image src={logo} alt="logo" className="hidden lg:flex" />
        </Link>
      </div>

      {!code && (
        <div className="max-w-[600px] w-full mx-auto">
          <p className="text-[18px] lg:text-[28px]  font-[600] mt-[48px] text-center">
            Forgot Password
          </p>
          <p className="mt-2 text-center lg:text-[18px] ">
            Please enter your email, we will send an OTP code
          </p>

          <div className="relative w-full border border-2 border-inputBorder flex rounded-[10px] mt-[24px]">
            <input
              type="email"
              disabled={false}
              placeholder="Email"
              name="email"
              value={payload.email}
              onChange={handleChange}
              className="py-[16px] px-[24px] w-full rounded-[10px] border-inputBorder  text-[12px] lg:text-[14px] outline-none"
            />
          </div>

          {showErrorr && (
            <p className="mt-[24px] text-center font-semibold text-red-600 text-[12px] lg:text-[16px] ">
              Something went wrong!
            </p>
          )}

          <Button
            text="Continue"
            onClick={HandleContinue}
            disabled={!validateInputs()}
            isLoading={isLoading}
            className=" text-white mt-[80px] w-full py-[16px]"
          />
        </div>
      )}

      {code && (
        <div className="max-w-[600px] w-full mx-auto">
          <p className="text-[18px] lg:text-[28px]  font-[600] mt-[48px] text-center">
            Confirm Code
          </p>
          <p className="mt-2 text-center lg:text-[18px] ">
            Enter the 6 digits code sent to your email
          </p>

          <div className="verify-inputs flex justify-between w-full mt-[24px]">
            {[1, 2, 3, 4, 5, 6].map((inputNumber) => (
              <input
                key={inputNumber}
                type="text"
                value={
                  inputValues[`inputValue${inputNumber}` as keyof InputValues]
                }
                onChange={(e) => handleInputChange(e, inputNumber)}
                className={`ver-inp ${
                  inputValues[`inputValue${inputNumber}` as keyof InputValues]
                    .length === 1
                    ? "input-background-fill"
                    : ""
                } w-10 h-10 lg:w-20 lg:h-20 outline-none  text-[14px] lg:text-[20px] text-center border border-lightgray`}
                ref={(input) => {
                  if (input) {
                    inputRefs.current[inputNumber - 1] = input;
                  }
                }}
              />
            ))}
          </div>

          {showError && (
            <p className="mt-[24px] text-center font-semibold text-red-600 text-[12px] lg:text-[16px] ">
              Something went wrong!
            </p>
          )}

          {resendTimer > 0 ? (
            <p className="mt-2 text-center">
              Resend code in 00:
              {resendTimer < 10 ? `0${resendTimer}` : resendTimer}
            </p>
          ) : (
            <p
              onClick={handleResendCode}
              className="mt-10 underline text-center"
            >
              Resend Code
            </p>
          )}

          <Button
            text="Confirm"
            onClick={HandleConfirm}
            // disabled={!validateInputs()}
            isLoading={loading}
            className=" text-white mt-[80px] w-full py-[16px]"
          />
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;

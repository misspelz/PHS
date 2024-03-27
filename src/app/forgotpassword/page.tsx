"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/phslogo.svg";
import mobilelogo from "@/assets/mobilelogo.svg";
import React, { useEffect, useRef, useState } from "react";
import Button from "@/components/button";
import { useRouter } from "next/navigation";

interface InputValues {
  inputValue1: string;
  inputValue2: string;
  inputValue3: string;
  inputValue4: string;
  inputValue5: string;
  inputValue6: string;
}

const ForgotPassword = () => {
  const [code, setCode] = useState(false);
  const [otp, setOTP] = useState<boolean>(false);
  const [inputValues, setInputValues] = useState<InputValues>({
    inputValue1: "",
    inputValue2: "",
    inputValue3: "",
    inputValue4: "",
    inputValue5: "",
    inputValue6: "",
  });

  const [resendTimer, setResendTimer] = useState<number>(60); // Initial timer value

  const inputRefs = useRef<(HTMLInputElement | null)[]>([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const HandleContinue = () => {
    setCode(true);
  };
  const nav = useRouter();

  const HandleConfirm = () => {
    nav.push("/newpassword");
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
    // Reset the timer when clicked
    setResendTimer(60);
    // Additional logic to resend code
    // Add your code to resend the OTP here
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

          <div className="relative w-full border  flex rounded-[10px] mt-[24px]">
            <input
              type={"text"}
              // onChange={() => {}}
              disabled={false}
              placeholder="Email"
              className="py-[16px] px-[24px] w-full  text-[12px] lg:text-[14px] outline-none"
            />
          </div>

          <Button
            text="Continue"
            onClick={HandleContinue}
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
                } w-10 h-10 lg:w-20 lg:h-20 outline-none px-4 text-[14px] lg:text-[20px] text-center border border-lightgray`}
                ref={(input) =>
                  input && (inputRefs.current[inputNumber - 1] = input)
                }
              />
            ))}
          </div>

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
            className=" text-white mt-[80px] w-full py-[16px]"
          />
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;

import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/phslogo.svg";
import mobilelogo from "@/assets/mobilelogo.svg";
import close from "@/assets/profileclose.svg";
import succesimg from "@/assets/profilesuccess.svg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Button from "@/components/button";
import LogoButton from "@/components/button/btnwithlogo";
import CREATE_ACCOUNT from "@/api/services/auth";

interface ProfileProps {
  phoneNumber?: string;
}

const Profile: React.FC<ProfileProps> = ({ phoneNumber = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: phoneNumber,
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [success, showSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const validateInputs = () => {
    return Object.values(formData).every((value) => value !== "");
  };

  const HandleSuccess = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await CREATE_ACCOUNT(formData);
      console.log("Registration successful:", response);
      showSuccess(true);
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const HandleClose = () => {
    showSuccess(false);
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
            Complete your profile
          </p>

          <form
            className="max-w-[600px] w-full mx-auto"
            onSubmit={HandleSuccess}
          >
            <div className="relative w-full border  flex rounded-[10px] mt-[24px]">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="py-[16px] px-[24px] w-full  text-[12px] lg:text-[14px] outline-none"
              />
            </div>

            <div className="relative w-full border  flex rounded-[10px] mt-[24px]">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="py-[16px] px-[24px] w-full  text-[12px] lg:text-[14px] outline-none"
              />
            </div>

            <div className="mt-[24px] py-[16px] px-[24px] border rounded-[10px]">
              <PhoneInput
                international
                defaultCountry="NG"
                value={formData.phone_number}
                onChange={(value) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    phoneNumber: value as string,
                  }))
                }
                className="outline-none text-black text-[12px] lg:text-[14px]"
              />
            </div>

            <div className="relative w-full border  flex rounded-[10px] mt-[24px]">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
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

            <div className="mb-[24px]">
              <Button
                text="Submit"
                className={`text-white mt-[80px] w-full py-[16px]`}
                disabled={!validateInputs()}
                isLoading={isLoading}
              />
              <LogoButton
                text="Continue with google"
                className=" mt-[24px] w-full py-[16px]"
              />
            </div>
          </form>
        </div>
      )}

      {success && (
        <div className="px-6 lg:px-[123px] py-[30px] h-screen">
          <div className="flex w-full justify-end">
            <Image src={close} alt="close-icon" onClick={HandleClose} />
          </div>

          <div className="flex flex-col items-center justify-center h-full max-w-[600px] w-full mx-auto">
            <Image src={succesimg} alt="close-icon" className="" />
            <p className="text-[18px] lg:text-[28px]  font-[600] mt-[24px] text-center">
              Congratulations
            </p>
            <p className="mt-[4px] text-center lg:text-[18px] ">
              Your profile has been set up successfully
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;

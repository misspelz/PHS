import React from "react";
import Link from "next/link";
import PText from "@/components/headings/PText";
import Image from "next/image";
import logo from "@/assets/footerwhite.svg";
import mobilelogo from "@/assets/footerlogo.svg";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import Button from "@/components/button/btn";

const Footer = () => {
  return (
    <div className="px-6 py-[40px] lg:py-[60px] lg:px-[123px] bg-brown">
      <div className="flex lg:hidden items-center justify-between gap-[40px]">
        <Link href="/" className="w-[30%]">
          {" "}
          <Image src={mobilelogo} alt="logo" className="" />
        </Link>
        <div className="flex flex-col gap-[16px] w-[70%] ">
          <PText className="text-white text-left lg:w-[100px]">
            At Prince Handyman Services, we understand the importance of having
            a reliable service.
          </PText>
          <div className="flex gap-[20px]">
            <div className="p-1 bg-primary rounded-full">
              <SlSocialFacebook size={20} color="white" />
            </div>
            <div className="p-1 bg-primary rounded-full">
              <FaInstagram size={20} color="white" />
            </div>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[10px]  justify-between">
        <div className="hidden lg:flex flex-col items-start justify-center gap-[20px]">
          <Link href="/" className="">
            {" "}
            <Image src={logo} alt="logo" className=" hidden lg:flex" />
            <Image src={mobilelogo} alt="logo" className=" lg:hidden" />
          </Link>

          <PText className="text-white text-left lg:w-[220px]">
            At Prince Handyman Services, we understand the importance of having
            a reliable service.
          </PText>

          <div className="flex gap-[20px]">
            <div className="p-1 bg-primary rounded-full">
              <SlSocialFacebook size={20} color="white" />
            </div>
            <div className="p-1 bg-primary rounded-full">
              <FaInstagram size={20} color="white" />
            </div>
          </div>
        </div>
        <div className="flex mt-[40px]  lg:justify-end">
          <div className="flex flex-col gap-[20px] justify-right w-full">
            <PText className="text-white font-[700] lg:text-[24px]">
              Services
            </PText>
            <ul className="flex flex-col gap-[20px] text-white text-[12px] lg:text-[16px]">
              <li className="cursor-pointer">Plumbing</li>
              <li className="cursor-pointer">Tv Mounting</li>
              <li className="cursor-pointer">Painting</li>
              <li className="cursor-pointer">Drywall Repairs</li>
              <li className="cursor-pointer">Capentry</li>
              <li className="cursor-pointer">General Household Maintenance</li>
            </ul>
          </div>
        </div>
        <div className="flex mt-[40px] lg:justify-end ">
          <div className="flex flex-col gap-[20px] justify-right w-full">
            <PText className="text-white font-[700] lg:text-[24px]">
              Contact Info
            </PText>
            <ul className="flex flex-col gap-[20px] text-white text-[12px] lg:text-[16px]">
              <li className="cursor-pointer ">
                Ringfort View, Balrothery, Balbriggan, Dublin
              </li>
              <li className="cursor-pointer">+353 89 266 0336</li>
              <li className="cursor-pointer">
                princehandymanservices01 @gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:flex mt-[40px] hidden lg:justify-end">
          <div className="flex flex-col gap-[20px] justify-left w-full">
            <PText className="text-white font-[700] lg:text-[24px]">
              Newsletter
            </PText>
            <PText className="text-white w-[200px]">
              Subscribe To Stay Up-to-Date with Prince Handyman Services
            </PText>
            <div className="relative w-full">
              <input
                placeholder="Email"
                className="h-[50px] pl-6 rounded-[8px] text-[12px] w-[250px]"
              />
              <Button
                text="Subscribe"
                className=" text-white absolute transform -translate-x-28 translate-y-[6px] lg:translate-y-[4px] lg:text-[12px] lg:px-6"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:hidden mt-[40px] lg:justify-end">
        <div className="flex flex-col gap-[20px] justify-left w-full">
          <PText className="text-white font-[700] lg:text-[24px]">
            Newsletter
          </PText>
          <PText className="text-white w-[200px]">
            Subscribe To Stay Up-to-Date with Prince Handyman Services
          </PText>
          <div className="relative w-full">
            <input
              placeholder="Email"
              className="h-[50px] lg:[70px] pl-6 rounded-[8px] text-[12px] w-[250px] "
            />
            <Button
              text="Subscribe"
              className=" text-white absolute transform -translate-x-28 translate-y-[6px] lg:translate-y-[4px] lg:text-[12px] lg:px-6"
            />
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-white mt-[40px] lg:mt-[40px] "></div>

      <PText className="text-white text-left mt-4 lg:mb-10 lg:mt-5">
        Copyright © 2024 Prince Handyman Services
      </PText>
    </div>
  );
};

export default Footer;

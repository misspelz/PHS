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
              <Link
                href="https://web.facebook.com/people/Prince-Handyman-Services/61552184172583/"
                target="_blank"
              >
                <SlSocialFacebook size={20} color="white" />
              </Link>
            </div>
            <div className="p-1 bg-primary rounded-full">
              <Link
                href="https://www.instagram.com/prince_handyman_services?igsh=MWJvcHhsNnowY3lqdQ%3D%3D&utm_source=qr"
                target="_blank"
              >
                <FaInstagram size={20} color="white" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[10px] lg:gap-[50px]  justify-between">
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
              <Link
                href="https://web.facebook.com/people/Prince-Handyman-Services/61552184172583/"
                target="_blank"
              >
                <SlSocialFacebook size={20} color="white" />
              </Link>
            </div>
            <div className="p-1 bg-primary rounded-full">
              <Link
                href="https://www.instagram.com/prince_handyman_services?igsh=MWJvcHhsNnowY3lqdQ%3D%3D&utm_source=qr"
                target="_blank"
              >
                <FaInstagram size={20} color="white" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex mt-[40px]  lg:justify-end">
          <div className="flex flex-col gap-[10px] lg:gap-[24px] justify-right w-full">
            <PText className="text-white font-[700] lg:text-[24px]">
              Services
            </PText>
            <ul className="flex flex-col gap-[10px] lg:gap-[16px] text-white text-[12px] lg:text-[16px]">
              <Link
                href={{
                  pathname: `/services`,
                  query: {
                    id: "1",
                    title: "Plumbing",
                    description:
                      "Our Plumbing mix their awesome skills to make really great paintings.",
                  },
                }}
              >
                <li className="cursor-pointer">Plumbing</li>
              </Link>
              <Link
                href={{
                  pathname: `/services`,
                  query: {
                    id: "2",
                    title: "Tv Mounting",
                    description:
                      "Our Tv Mounting mix their awesome skills to make really great paintings.",
                  },
                }}
              >
                <li className="cursor-pointer">Tv Mounting</li>
              </Link>
              <Link
                href={{
                  pathname: `/services`,
                  query: {
                    id: "3",
                    title: "Painting",
                    description:
                      "Our Painting mix their awesome skills to make really great paintings.",
                  },
                }}
              >
                <li className="cursor-pointer">Painting</li>
              </Link>

              <Link
                href={{
                  pathname: `/services`,
                  query: {
                    id: "4",
                    title: "Drywall Repairs",
                    description:
                      "Our Drywall Repairs mix their awesome skills to make really great paintings.",
                  },
                }}
              >
                <li className="cursor-pointer">Drywall Repairs</li>
              </Link>

              <Link
                href={{
                  pathname: `/services`,
                  query: {
                    id: "5",
                    title: "Capentry",
                    description:
                      "Our Capentry Repairs mix their awesome skills to make really great paintings.",
                  },
                }}
              >
                <li className="cursor-pointer">Capentry</li>
              </Link>

              <Link
                href={{
                  pathname: `/services`,
                  query: {
                    id: "6",
                    title: "General Household Maintenance",
                    description:
                      "Our General Household Maintenance Repairs mix their awesome skills to make really great paintings.",
                  },
                }}
              >
                <li className="cursor-pointer">
                  General Household Maintenance
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex mt-[40px] lg:justify-end ">
          <div className="flex flex-col gap-[10px] lg:gap-[24px] justify-right w-full">
            <PText className="text-white font-[700] lg:text-[24px]">
              Contact Info
            </PText>
            <ul className="flex flex-col gap-[10px] lg:gap-[16px] text-white text-[12px] lg:text-[16px]">
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

        {/* LARGE SCREEN */}
        <div className="lg:flex mt-[40px] hidden lg:justify-end ">
          <div className="flex flex-col gap-[20px] lg:gap-[24px] justify-left w-full">
            <PText className="text-white font-[700] lg:text-[24px]">
              Newsletter
            </PText>
            <PText className="text-white ">
              Subscribe To Stay Up-to-Date with Prince Handyman Services
            </PText>
            <div className="relative bg-white rounded-[8px] pr-[20px]">
              <input
                placeholder="Email"
                className="h-[60px] pl-6 rounded-[8px] text-[12px]  outline-none"
              />
              <div className="flex justify-end ">
                <Button
                  text="Subscribe"
                  className=" text-white absolute  top-[9px] lg:text-[12px] lg:px-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE SCREEN */}
      <div className="flex lg:hidden mt-[31px] lg:justify-end">
        <div className="flex flex-col gap-[16px] justify-left w-full">
          <PText className="text-white font-[700] lg:text-[24px]">
            Newsletter
          </PText>
          <PText className="text-white w-[200px]">
            Subscribe To Stay Up-to-Date with Prince Handyman Services
          </PText>
          <div className="relative w-full bg-white rounded-[8px] pr-[0px]">
            <input
              placeholder="Email"
              className="h-[50px] lg:[70px] pl-6 rounded-[8px] text-[12px] w-full outline-none"
            />
            <Button
              text="Subscribe"
              className=" text-white absolute transform -translate-x-28 translate-y-[6px] lg:translate-y-[4px] lg:text-[12px]  lg:px-6"
            />
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-white mt-[48px] lg:mt-[40px] "></div>

      <PText className="text-white text-left mt-[8px] lg:mb-10 lg:mt-5">
        Copyright © 2024 Prince Handyman Services
      </PText>
    </div>
  );
};

export default Footer;

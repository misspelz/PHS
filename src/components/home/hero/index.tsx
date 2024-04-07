"use client";

import React from "react";
import heromobilebg from "@/assets/heroimg.svg";
import calendar from "@/assets/calendarphs.svg";
import herobg from "@/assets/herowebimg.svg";
import H1Heading from "@/components/headings/H1Heading";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/contextapi";

const Hero = () => {
  const { userProfile } = useAuth();

  return (
    <div>
      <div className="lg:hidden">
        <div
          className="h-[400px] bg-cover bg-no-repeat background-position-x-right"
          style={{
            backgroundImage: `url(${heromobilebg.src})`,
            filter: "brightness(70%)",
          }}
        ></div>

        <div className="py-[12px] px-6 md:px-40 w-full">
          <H1Heading className="text-center w-[300px] mx-auto">
            Your Trusted <span className="text-primary">Handyman</span> Service
            for Every Repair
          </H1Heading>

          {userProfile ? (
            <Link href="book-appointment">
              <button
                className={`rounded-[8px] bg-primary text-[#fff] py-[14px]  px-6  text-[12px]  w-full mt-[28px] flex items-center justify-center gap-[10px]`}
              >
                <Image src={calendar} alt="calendar" />
                Book Appointment
              </button>
            </Link>
          ) : (
            <Link href="register">
              <button
                className={`rounded-[8px] bg-primary text-[#fff] py-[14px]  px-6  text-[12px]  w-full mt-[28px] flex items-center justify-center gap-[10px]`}
              >
                <Image src={calendar} alt="calendar" />
                Book Appointment
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Big Screen */}
      <div className="hidden lg:block relative">
        <div
          className="h-[785px] bg-cover bg-no-repeat "
          style={{
            backgroundImage: `url(${herobg.src})`,
          }}
        ></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="absolute transform top-[25%] px-[123px]">
          <H1Heading className="text-left text-white w-[500px]">
            Your Trusted <span className="text-[#d76e06]">Handyman</span>{" "}
            Service for Every Repair
          </H1Heading>

          {userProfile ? (
            <Link href="book-appointment">
              <button
                className={`rounded-[8px] bg-primary text-[#fff] py-[20px]  px-[105px]   mt-[28px] lg:mt-[62px] flex items-center justify-center gap-[10px] text-[18px]  `}
              >
                <Image src={calendar} alt="calendar" />
                Book Appointment
              </button>
            </Link>
          ) : (
            <Link href="register">
              <button
                className={`rounded-[8px] bg-primary text-[#fff] py-[20px]  px-[105px]   mt-[28px] lg:mt-[62px] flex items-center justify-center gap-[10px] text-[18px] `}
              >
                <Image src={calendar} alt="calendar" />
                Book Appointment
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;

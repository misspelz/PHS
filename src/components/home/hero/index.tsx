"use client";

import React, { useEffect, useState } from "react";
import heromobilebg from "@/assets/mobileherobg.svg";
import herobg from "@/assets/herobgwebphs.svg";
import H1Heading from "@/components/headings/H1Heading";
import { LuCalendarDays } from "react-icons/lu";
import Link from "next/link";

const Hero = () => {
  const [LoggedInUser, setLoggedInUser] = useState<string | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("PHS_LoggedInUser");
    setLoggedInUser(user);
  }, []);

  return (
    <div>
      <div className="lg:hidden">
        <div
          className="h-[600px] bg-cover bg-no-repeat background-position-x-right"
          style={{
            backgroundImage: `url(${heromobilebg.src})`,
          }}
        ></div>

        <div className="py-[12px] px-6 md:px-40 w-full">
          <H1Heading className="text-center">
            Your Trusted <span className="text-primary">Handyman</span> Service
            for Every Repair
          </H1Heading>

          {LoggedInUser === "true" ? (
            <Link href="book-appointment">
              <button
                className={`rounded-[8px] bg-primary text-[#fff] py-[14px]  px-6  text-[12px]  w-full mt-[28px] flex items-center justify-center gap-[4px]`}
              >
                <LuCalendarDays />
                Book Appointment
              </button>
            </Link>
          ) : (
            <Link href="register">
              <button
                className={`rounded-[8px] bg-primary text-[#fff] py-[14px]  px-6  text-[12px]  w-full mt-[28px] flex items-center justify-center gap-[4px]`}
              >
                <LuCalendarDays />
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
        <div className="absolute transform top-[35%] px-[123px]">
          <H1Heading className="text-left w-[600px]">
            Your Trusted <span className="text-primary">Handyman</span> Service
            for Every Repair
          </H1Heading>

          {LoggedInUser === "true" ? (
            <Link href="book-appointment">
              <button
                className={`rounded-[8px] bg-primary text-[#fff] py-[16px]  px-28   mt-[28px] lg:mt-[62px] flex items-center justify-center gap-[4px] text-[18px] `}
              >
                <LuCalendarDays />
                Book Appointment
              </button>
            </Link>
          ) : (
            <Link href="register">
              <button
                className={`rounded-[8px] bg-primary text-[#fff] py-[16px]  px-28   mt-[28px] lg:mt-[62px] flex items-center justify-center gap-[4px] text-[18px] `}
              >
                <LuCalendarDays />
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

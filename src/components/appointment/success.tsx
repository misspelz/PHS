import Image from "next/image";
import React from "react";
import close from "@/assets/profileclose.svg";
import succesimg from "@/assets/profilesuccess.svg";
import Link from "next/link";
import Button from "../button";

const Success = ({ HandleClose }) => {
  return (
    <div className="px-6 mx-4 py-[30px] pb-[50px] lg:w-[600px]   bg-white rounded-[10px]">
      <div className="flex w-full justify-end">
        <Image src={close} alt="close-icon" onClick={HandleClose} />
      </div>

      <div className="flex flex-col items-center justify-center h-full max-w-[600px] w-full mx-auto">
        <Image src={succesimg} alt="close-icon" className="" />
        <p className="text-[18px] lg:text-[28px]  font-[600] mt-[24px] text-center">
          Congratulations
        </p>
        <p className="mt-[4px] text-center lg:text-[18px] ">
          You have successfully booked an appointment
        </p>
      </div>
    </div>
  );
};

export default Success;

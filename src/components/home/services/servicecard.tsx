import Image from "next/image";
import React from "react";
import service from "@/assets/service1.svg";
import design from "@/assets/basedesign.svg";
import arrow from "@/assets/servicearrow.svg";

const Servicecard = () => {
  return (
    <div className="relative w-[170px] h-[370px] ">
      <Image src={service} alt="service" className="rounded-[10px] w-full" />
      <div className="absolute bottom-4 right-0 bg-[#fff]  pl-[14px] pt-[10px] shadow-lg">
        <h3 className="text-[14px] text-center font-[600]">Plumbing</h3>
        <p className="w-[130px] text-[14px] mt-[8px] pr-[14px]">
          Our painters mix their awesome skills to make really great paintings.
        </p>
        <div className="w-full flex items-center mt-[22px] gap-[20px]">
          <p className="text-[14px] text-primary">Learn more</p>
          <Image src={arrow} alt="learn-more-arrow" />
        </div>
        <div className="w-fulll flex justify-end">
          <Image src={design} alt="base-design" />
        </div>
      </div>
    </div>
  );
};

export default Servicecard;

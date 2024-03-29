import React from "react";
import Image from "next/image";
import design from "@/assets/basewebdesign.svg";
import arrow from "@/assets/servicearrow.svg";

interface WebServicecardProps {
  title: string;
  description: string;
  imageSrc: string;
  learn: React.ReactNode;
}

const WebServicecard: React.FC<WebServicecardProps> = ({
  title,
  description,
  imageSrc,
  learn,
}) => {
  return (
    <div className="relative  h-[450px] ">
      <Image src={imageSrc} alt="service" className="rounded-[10px] w-full" />
      <div className="absolute bottom-4 right-0 bg-[#fff]  pl-[24px] pt-[16px] shadow-lg ml-6">
        <h3 className="text-[14px] text-center font-[600]">{title}</h3>
        <p className=" text-[14px] mt-[8px] pr-[14px]">{description}</p>
        <div className="w-full flex items-center mt-[48px] gap-[20px] justify-center cursor-pointer">
          <p className="text-[14px] text-primary">{learn}</p>
          <Image src={arrow} alt="learn-more-arrow" />
        </div>
        <div className="w-fulll flex justify-end">
          <Image src={design} alt="base-design" />
        </div>
      </div>
    </div>
  );
};

export default WebServicecard;

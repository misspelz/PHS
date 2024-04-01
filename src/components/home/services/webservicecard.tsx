import React from "react";
import Image from "next/image";
import design from "@/assets/webbasedesign.svg";
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
    <div className="relative  h-[600px] ">
      <Image src={imageSrc} alt="service" className="rounded-[10px] w-full" />
      <div className="absolute bottom-20 right-0 bg-[#fff]  pl-[24px] pt-[16px] shadow-lg ml-6 h-[270px] flex flex-col justify-between">
        <div>
          <h3 className="text-[18px] text-center font-[600]">{title}</h3>
          <p className=" text-[16px] mt-[8px] pr-[40px] ">{description}</p>
        </div>

        <div className=" mt-[24px] flex flex-col gap-[24px]">
          <div className="w-full flex items-center  gap-[20px] justify-center cursor-pointer">
            <p className="text-[16px] text-primary">{learn}</p>
            <Image src={arrow} alt="learn-more-arrow" />
          </div>
          <div className="w-fulll flex justify-end">
            <Image src={design} alt="base-design" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebServicecard;

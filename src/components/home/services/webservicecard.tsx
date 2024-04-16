import React from "react";
import Image from "next/image";
import design from "@/assets/webbasedesign.svg";
import Link from "next/link";
import arrowimg from "@/assets/servicearrow.svg";
import { LinkProps } from "next/link";

interface WebServicecardProps {
  title: string;
  description: string;
  imageSrc: string;
  arrow: LinkProps;
  learn: React.ReactNode;
}

const WebServicecard: React.FC<WebServicecardProps> = ({
  title,
  description,
  imageSrc,
  learn,
  arrow,
}) => {
  return (
    <div className="relative  h-[600px] ">
      <Image src={imageSrc} alt="service" className="rounded-[10px] w-full" />
      <div className="absolute top-64 right-0 bg-[#fff] pt-[16px] shadow-lg ml-6 h-[260px] flex flex-col justify-between">
        <div>
          <h3 className="text-[18px] text-center font-[600]">{title}</h3>
          <p className=" text-[16px] mt-[8px] px-[33px] ">{description}...</p>
        </div>
        <div className="  flex flex-col gap-[24px]">
          <div className="w-full flex items-center  gap-[20px] justify-center cursor-pointer">
            <p className="text-[16px] text-primary">{learn}</p>
            <Link {...arrow}>
              <Image src={arrowimg} alt="learn-more-arrow" />
            </Link>
          </div>
          <div className="w-full flex justify-end">
            <Image src={design} alt="base-design" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebServicecard;

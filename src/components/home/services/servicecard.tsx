import Image from "next/image";
import React from "react";
import service from "@/assets/service1.svg";
import design from "@/assets/basedesign.svg";
import arrowimg from "@/assets/servicearrow.svg";
import Link from "next/link";
import { LinkProps } from "next/link";

interface WebServicecardProps {
  title: string;
  description: string;
  imageSrc: string;
  arrow: LinkProps;
  learn: React.ReactNode;
}

const Servicecard: React.FC<WebServicecardProps> = ({
  title,
  description,
  imageSrc,
  learn,
  arrow,
}) => {
  return (
    <div className="relative w-[170px] h-[350px] ">
      <Image src={imageSrc} alt="service" className="rounded-[10px] w-full" />
      <div className="absolute top-32 right-0 bg-[#fff]  pt-[10px] shadow-lg w-[147px]  flex flex-col ">
        <div className=" ">
          <h3 className="text-[14px] text-center font-[600]">{title}</h3>
          <p className="w-[130px] text-[14px] p-[14px] pr-0">{description}...</p>
        </div>
        <div className="flex flex-col  pl-[14px] mt-[px] ">
          <div className="w-full flex items-center gap-[12px] lg:gap-[20px] cursor-pointer">
            <p className="text-[14px] text-primary">{learn}</p>
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

export default Servicecard;

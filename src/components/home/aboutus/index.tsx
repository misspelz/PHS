import H6Heading from "@/components/headings/H6Heading";
import Image from "next/image";
import image from "@/assets/phsaboutimg.svg";
import imageweb from "@/assets/aboutimage.svg";
import icon1 from "@/assets/abticon1.svg";
import icon2 from "@/assets/abticon2.svg";
import icon3 from "@/assets/abticon3.svg";
import icon4 from "@/assets/abticon4.svg";
import image2 from "@/assets/count.svg";
import React from "react";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="px-6 lg:px-[123px] py-[48px] mt-[48px]  bg-brown"
    >
      <H6Heading className="text-center font-[600] text-white">
        About Us
      </H6Heading>
      <p className={`text-[16px] text-center lg:text-[18px] text-white`}>
        We are experts in all handyman services
      </p>
      <div className="lg:flex lg:gap-[116px]">
        <div className="flex w-full items-center justify-center">
          <Image src={image} alt="image" className="mt-[28px] lg:hidden" />
          <Image
            src={imageweb}
            alt="image"
            className="mt-[28px] hidden lg:flex"
          />
        </div>
        <div className="mt-[24px] grid grid-cols-1 sm:grid-cols-2 gap-[17px] w-full">
          <div className="bg-white px-[13px] lg:px-[17px] rounded-[10px]">
            <Image src={icon1} alt="icon1" className="mt-[12px] lg:mt-[24px]" />
            <p className="mt-[12px] font-[500] text-[14px] lg:text-[18px] lg:mt-[16px]">
              Experienced
            </p>
            <p className="mt-[4px] text-[14px] lg:text-[16px] mb-[40px] lg:mb-0  lg:mt-[8px] lg:leading-[24px]">
              We&apos;ve been serving customers like you for over a decade. Our
              experience means we know how to get the job done right.
            </p>
          </div>
          <div className="bg-white px-[13px] lg:px-[17px] rounded-[10px]">
            <Image src={icon2} alt="icon1" className="mt-[12px] lg:mt-[24px]" />
            <p className="mt-[12px] font-[500] text-[14px] lg:text-[18px] lg:mt-[16px]">
              Experienced
            </p>
            <p className="mt-[4px] text-[14px] lg:text-[16px] mb-[40px] lg:mb-0  lg:mt-[8px] lg:leading-[24px]">
              We&apos;ve been serving customers like you for over a decade. Our
              experience means we know how to get the job done right.
            </p>
          </div>
          <div className="bg-white px-[13px] lg:px-[17px] rounded-[10px]">
            <Image src={icon3} alt="icon1" className="mt-[12px] lg:mt-[24px]" />
            <p className="mt-[12px] font-[500] text-[14px] lg:text-[18px] lg:mt-[16px]">
              Experienced
            </p>
            <p className="mt-[4px] text-[14px] lg:text-[16px] mb-[40px] lg:mb-0  lg:mt-[8px] lg:leading-[24px]">
              We&apos;ve been serving customers like you for over a decade. Our
              experience means we know how to get the job done right.
            </p>
          </div>
          <div className="bg-white px-[13px] lg:px-[17px] rounded-[10px]">
            <Image src={icon4} alt="icon1" className="mt-[12px] lg:mt-[24px]" />
            <p className="mt-[12px] font-[500] text-[14px] lg:text-[18px] lg:mt-[16px]">
              Experienced
            </p>
            <p className="mt-[4px] text-[14px] lg:text-[16px] mb-[40px] lg:mb-0 lg:mt-[8px] lg:leading-[24px]">
              We&apos;ve been serving customers like you for over a decade. Our
              experience means we know how to get the job done right.
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full gap-[25px] mt-[52px] ">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex gap-[12px] items-center">
            <Image src={image2} alt="image" className="" />
            <p className="text-[13px] lg:text-[24px]  text-white">350+</p>
          </div>
          <p className="text-[13px] lg:text-[24px] mt-2 font-[500] text-center text-white">
            Projects Completed
          </p>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="flex gap-[12px] items-center">
            <Image src={image2} alt="image" className="" />
            <p className="text-[13px] lg:text-[24px]  text-white">500+</p>
          </div>
          <p className="text-[13px] lg:text-[24px] mt-2 font-[500] text-center text-white">
            Happy Clients
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex gap-[12px] items-center">
            <Image src={image2} alt="image" className="" />
            <p className="text-[13px] lg:text-[24px]  text-white">10+</p>
          </div>
          <p className="text-[13px] lg:text-[24px] mt-2 font-[500] text-center text-white">
            Years of Experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import H6Heading from "@/components/headings/H6Heading";
import Image from "next/image";
import React from "react";
import reviewimg from "@/assets/reviewimg.svg";
import quote from "@/assets/phsquoteicon.svg";

const Reviews = () => {
  return (
    <div className="px-6 lg:px-[123px] py-[48px] max-w-[1500px] mx-auto ">
      <H6Heading className="text-center font-[600] ">Reviews</H6Heading>
      <p className={`text-[16px] text-center lg:text-[18px] `}>
        Here is what our customers have to say about us
      </p>
      <div className="overflow-x-scroll lg:overflow-x-hidden ">
        <div className="mt-[28px] flex gap-[30px] items-center lg:overflow-x-hidden w-[1200px] overflow-x-scroll   lg:w-full lg:justify-between lg:gap-[77px]">
          <div className="flex flex-col justify-center items-center w-[175px]  lg:w-full">
            <div className="w-full rounded-full flex flex-col justify-center items-center">
              <Image
                src={reviewimg}
                alt="image"
                className="h-[60px] w-[60px] lg:h-[150px] lg:w-[150px] rounded-full"
              />
            </div>
            <Image src={quote} alt="image" className="mt-4 lg:mt-4" />
            <p className="text-[14px] lg:text-[18px] mt-[12px] font-[700]">
              John Smith
            </p>
            <p className="text-[14px] lg:text-[16px] mt-[8px] text-center">
              Outstanding service! Prince Handyman Service went above and beyond
              to complete my project on time and within budget.{" "}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-[175px]   lg:w-full">
            <div className="w-full rounded-full flex flex-col justify-center items-center">
              <Image
                src={reviewimg}
                alt="image"
                className="h-[60px] w-[60px] lg:h-[150px] lg:w-[150px] rounded-full"
              />
            </div>
            <Image src={quote} alt="image" className="mt-4 lg:mt-4" />
            <p className="text-[14px] lg:text-[18px] mt-[12px] font-[700]">
              John Smith
            </p>
            <p className="text-[14px] lg:text-[16px] mt-[8px] text-center">
              Outstanding service! Prince Handyman Service went above and beyond
              to complete my project on time and within budget.{" "}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center  w-[175px]  lg:w-full">
            <div className="w-full rounded-full flex flex-col justify-center items-center">
              <Image
                src={reviewimg}
                alt="image"
                className="h-[60px] w-[60px] lg:h-[150px] lg:w-[150px] rounded-full"
              />
            </div>
            <Image src={quote} alt="image" className="mt-4 lg:mt-4" />
            <p className="text-[14px] lg:text-[18px] mt-[12px] font-[700]">
              John Smith
            </p>
            <p className="text-[14px] lg:text-[16px] mt-[8px] text-center">
              Outstanding service! Prince Handyman Service went above and beyond
              to complete my project on time and within budget.{" "}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-[175px]   lg:w-full">
            <div className="w-full rounded-full flex flex-col justify-center items-center">
              <Image
                src={reviewimg}
                alt="image"
                className="h-[60px] w-[60px] lg:h-[150px] lg:w-[150px] rounded-full"
              />
            </div>
            <Image src={quote} alt="image" className="mt-4 lg:mt-4" />
            <p className="text-[14px] lg:text-[18px] mt-[12px] font-[700]">
              John Smith
            </p>
            <p className="text-[14px] lg:text-[16px] mt-[8px] text-center">
              Outstanding service! Prince Handyman Service went above and beyond
              to complete my project on time and within budget.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

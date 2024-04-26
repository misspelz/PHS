import H6Heading from "@/components/headings/H6Heading";
import Image from "next/image";
import React from "react";
import john from "@/assets/reviewimg.svg";
import quote from "@/assets/phsquoteicon.svg";
import sarah from "@/assets/sarah.svg";
import michael from "@/assets/michael.svg";
import emily from "@/assets/emily.svg";

const reviewData = [
  {
    name: "John Smith",
    image: john,
    testimonial:
      "Outstanding service! Prince Handyman Service went above and beyond to complete my project on time and within budget.",
  },
  {
    name: "Sarah",
    image: sarah,
    testimonial:
      "I couldn't be happier with the results! exceptional service from start to finish. Professional, reliable, and skilled - I'll definitely be a repeat customer.",
  },
  {
    name: "Michael Davis",
    image: michael,
    testimonial:
      "Impressed by the professionalism and attention to detail displayed by the team. They exceeded my expectations and delivered exceptional quality.",
  },
  {
    name: "Emily",
    image: emily,
    testimonial:
      "Fantastic experience working with them. Their team was friendly, efficient, and incredibly knowledgeable. I'm thrilled with the outcome.",
  },
];

const Reviews = () => {
  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };
  
  return (
    <div className="px-6 lg:px-[123px] py-[48px] max-w-[1500px] mx-auto ">
      <H6Heading className="text-center font-[600] ">Reviews</H6Heading>
      <p className={`text-[16px] text-center lg:text-[18px] `}>
        Here is what our customers have to say about us
      </p>
      <div className={`customScrollbar overflow-x-scroll `}>
        <div className="mt-[28px] flex items-start w-[800px] lg:overflow-x-hidden lg:w-[1200px] overflow-x-scroll  gap-[34px]   lg:gap-[77px]">
          {reviewData.map((review, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-[175px]  lg:w-[238px] "
            >
              <div className="w-full rounded-full flex flex-col justify-center items-center">
                <p className="text-[20px] lg:text-[40px] font-bold text-gray-800">
                  {getInitials(review.name)}
                </p>
              </div>
              <Image
                src={quote}
                alt="Quotation Mark"
                className="mt-4 lg:mt-4"
              />
              <p className="text-[14px] lg:text-[18px] mt-[12px] font-[700]">
                {review.name}
              </p>
              <p className="text-[14px] lg:text-[16px] mt-[8px] text-center lg:w-[220px] mb-5 lg:mb-10">
                {review.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

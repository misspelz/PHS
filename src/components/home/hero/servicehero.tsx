import Link from "next/link";
import React, { ReactElement } from "react";
import { LuCalendarDays } from "react-icons/lu";

interface Background {
  src: string;
}
interface HeroProps {
  mobileBackground: Background;
  desktopBackground: Background;
  headingText?: string;
  buttonText?: string;
  buttonIcon?: ReactElement;
}

const Hero: React.FC<HeroProps> = ({
  mobileBackground,
  desktopBackground,
  headingText,
}) => {
  return (
    <>
      {/* Mobile Screen */}
      <div className="lg:hidden">
        <div
          className="h-[350px]  bg-cover bg-no-repeat "
          style={{
            backgroundImage: `url(${mobileBackground.src})`,
          }}
        ></div>
        <div className="w-full z-20  flex flex-col items-center justify-center">
          <div className="py-[12px] px-6  w-full flex flex-col items-center justify-center">
            <h1 className="text-center text-[18px] font-[600]">
              {headingText}
            </h1>
            <Link href="book-appointment">
              <button
                className={`rounded-[8px] bg-primary text-[#fff] py-[10px] px-10  lg:px-28   mt-[10px] flex items-center justify-center gap-[4px] text-[16px] `}
              >
                <LuCalendarDays />
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Big Screen */}
      <div className="hidden lg:block ">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div
          className="h-[550px]  bg-cover bg-no-repeat flex flex-col justify-center items-center"
          style={{
            backgroundImage: `url(${desktopBackground.src})`,
          }}
        >
          <div className="z-20">
            <h1 className="text-center text-white text-[60px] font-[600]">
              {headingText}
            </h1>
            <Link href="book-appointment">
              <button
                className={`rounded-[8px] bg-primary text-[#fff] py-[16px]  px-28   mt-[20px] flex items-center justify-center gap-[4px] text-[18px] `}
              >
                <LuCalendarDays />
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

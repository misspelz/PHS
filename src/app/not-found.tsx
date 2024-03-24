import Image from "next/image";
import React from "react";
import notfoundimg from "@/assets/notfoundphs.svg";
import Button from "@/components/button";
import Link from "next/link";
import PText from "@/components/headings/PText";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen px-6 lg:px-0">
        <Image
          src={notfoundimg}
          alt="not-found-img"
          className="w-[200px] lg:w-[350px]"
        />

        <h2
          className={` text-center text-[24px] lg:text-[36px] font-[500] lg:leading-[70px] `}
        >
          Uh oh! We can’t find that page...
        </h2>
        <PText className="text-center mt-4 lg:mt-0">
          Sorry, the page you are looking for doesn’t exist or has been moved.{" "}
        </PText>
        <PText className="text-center mt-4 lg:mt-0">
          You could trying going back to the homepage
        </PText>
        <Link href="/">
          <Button text="Go to Homepage" className="bg-gray text-white mt-4 " />
        </Link>
      </div>
    </>
  );
};

export default NotFound;

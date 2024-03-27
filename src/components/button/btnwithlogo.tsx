import React from "react";
import googlelogo from "@/assets/google logo.svg";
import Image from "next/image";

interface ButtonProps {
  className?: string;
  text: string;
  bg?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, text, onClick }) => {
  return (
    <button
      className={`rounded-[8px] border border-primary text-black py-[10px] lg:py-[12px] px-6 lg:px-10 ${className} text-[12px] lg:text-[18px] flex items-center justify-center gap-2`}
      onClick={onClick}
    >
      <Image src={googlelogo} alt="logo" />
      {text}
    </button>
  );
};

export default Button;

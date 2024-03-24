import React from "react";

interface ButtonProps {
  className?: string;
  text: string;
  bg?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, text, onClick }) => {
  return (
    <button
      className={`rounded-[8px] bg-primary text-black py-[10px] lg:py-[12px] px-6 lg:px-10 ${className} text-[12px] lg:text-[18px]`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

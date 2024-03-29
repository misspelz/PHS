import React from "react";

interface ButtonProps {
  className?: string;
  text: string;
  bg?: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  text,
  onClick,
  isLoading,
  disabled,
}) => {
  return (
    <button
      className={`rounded-[8px] bg-primary text-black py-[10px] lg:py-[12px] px-6 lg:px-10 ${className} text-[12px] lg:text-[18px] ${
        disabled ? "bg-gray-300 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading ? "Loading..." : text}
    </button>
  );
};

export default Button;

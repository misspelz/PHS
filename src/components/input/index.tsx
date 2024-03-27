import React, { useState, ChangeEvent } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

interface Props {
  id?: string;
  label?: string;
  type?: "text" | "password";
  onChange?: ((e: ChangeEvent<HTMLInputElement>) => void) | undefined;
  isDisabled?: boolean;
  placeholder?: string;
  rightIcon?: React.ReactNode;
}

export default function Input({
  id = "",
  label = "",
  type = "text",
  onChange,
  isDisabled = false,
  placeholder = `${label?.toLowerCase()}`,
  rightIcon,
  ...rest
}: Props) {
  const [inputType, setInputType] = useState<string>(type);

  const handleClick = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <div className="relative w-full border-2 border-[#D9D9D9] rounded-[8px]">
      <input
        id={id}
        type={inputType}
        placeholder={placeholder}
        className="rounded-lg px3 outline-none font-regular pl-10 borderless-input"
        onChange={onChange}
        disabled={isDisabled}
        {...rest}
      />

      {type === "password" ? (
        <div
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
          onClick={handleClick}
        >
          {inputType === "password" ? (
            <IoMdEyeOff color="#008080" />
          ) : (
            <IoMdEye color="#008080" />
          )}
        </div>
      ) : (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
          {rightIcon}
        </div>
      )}
    </div>
  );
}

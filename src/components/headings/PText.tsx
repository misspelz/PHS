import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  color?: string;
}

const PText: React.FC<Props> = ({ children, className }) => {
  return (
    <p className={`text-[12px] lg:text-[16px] ${className}`}>{children}</p>
  );
};

export default PText;

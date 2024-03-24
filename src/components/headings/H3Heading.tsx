import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: string;
  className?: string;
}

const H3Heading: React.FC<Props> = ({ children, color, className }) => {
  return (
    <h3
      className={`text-[30px] text-${color} lg:text-[36px] font-[500] leading-[38px] lg:leading-[40px] ${className}`}
    >
      {children}
    </h3>
  );
};

export default H3Heading;

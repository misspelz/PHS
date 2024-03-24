import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: string;
  w?: string;
  className?: string;
}

const H2Heading: React.FC<Props> = ({
  children,
  color = "primary",
  w,
  className,
}) => {
  return (
    <h2
      className={`text-[20px] md:text-[24px] w-[${w}] lg:text-[48px] font-[500] lg:leading-[70px] text-${color} ${className}`}
    >
      {children}
    </h2>
  );
};

export default H2Heading;

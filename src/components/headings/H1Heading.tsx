import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: string;
  className?: string;
}

const H1Heading: React.FC<Props> = ({
  children,
  color = "white",
  className,
}) => {
  return (
    <h1
      className={` text-${color} text-[48px] lg:text-[64px]  font-[500]  leading-[60px] lg:leading-[80px] ${className}`}
    >
      {children}
    </h1>
  );
};

export default H1Heading;

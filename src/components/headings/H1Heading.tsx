import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const H1Heading: React.FC<Props> = ({ children, className }) => {
  return (
    <h1
      className={` text-[32px] lg:text-[60px] font-[600]  leading-[36px] lg:leading-[72px] ${className}`}
    >
      {children}
    </h1>
  );
};

export default H1Heading;

import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const H4Heading: React.FC<Props> = ({ children, className }) => {
  return (
    <h4 className={`text-[36px] lg:text-[48px]  ${className}`}>{children}</h4>
  );
};

export default H4Heading;

import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const H6Heading: React.FC<Props> = ({ children, className }) => {
  return <h6 className={`text-[20px] font-[400] ${className}`}>{children}</h6>;
};

export default H6Heading;

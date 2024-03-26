"use client";

import Link from "next/link";
import React, { useState } from "react";
import Button from "@/components/button";
import logo from "@/assets/phslogo.svg";
import mobilelogo from "@/assets/mobilelogo.svg";
import Image from "next/image";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";

export const navlinks: NavLink[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Services",
    link: "/services",
  },
  {
    id: 3,
    title: "About",
    link: "/about",
  },
  {
    id: 4,
    title: "Contact",
    link: "/contact",
  },
];

interface NavLink {
  id: number;
  title: string;
  link: string;
}
interface NavbarProps {
  isScrolled?: boolean;
  active?: string;
  className?: string;
}

const Navbar = ({ active, className }: NavbarProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <nav
      className={`
    fixed z-[999] w-full bg-[#fff] text-[#000] transition duration-500  h-[100px] ${className} flex items-center shadow-md`}
    >
      <div className="flex justify-between items-center px-6 lg:px-[123px]  w-full">
        <Link href="/">
          {" "}
          <Image src={mobilelogo} alt="logo" className="lg:hidden" />
          <Image src={logo} alt="logo" className="hidden lg:flex" />
        </Link>

        <ul className={` gap-[36px] hidden lg:flex `}>
          {navlinks &&
            navlinks.map(({ id, link, title }) => (
              <li
                key={id}
                className={`text-[16px] font-normal ease-in-out duration-300 capitalize ${
                  active?.toLocaleLowerCase() === title.toLocaleLowerCase()
                    ? "text-primary "
                    : "text-[#000] "
                }`}
              >
                <Link href={link}>{title}</Link>
              </li>
            ))}
        </ul>

        <div className="flex  items-center gap-[24px]">
          <div className="flex lg:hidden">
            {open ? (
              <RiCloseFill
                size={30}
                className="cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <RiMenuFill
                size={25}
                className="cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>

          <Button text="Login" className=" text-white" />
        </div>
      </div>

      <div
        className={`${
          open
            ? "max-h-[200px] opacity-100 transition-all duration-500 ease-in-out"
            : "max-h-0 opacity-0 transition-all duration-500 ease-in-out"
        } overflow-hidden flex flex-col lg:hidden bg-white gap-4 absolute top-[95px] z-[999] w-full p-6`}
      >
        {navlinks.map(({ id, title, link }) => (
          <Link
            key={id}
            href={link}
            className={`text-[14px] font-normal ease-in-out duration-300 uppercase ${
              active?.toLocaleLowerCase() === title.toLocaleLowerCase()
                ? "text-primary "
                : "text-[#000] "
            }`}
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

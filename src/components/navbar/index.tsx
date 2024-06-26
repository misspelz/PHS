"use client";

import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import Button from "@/components/button";
import logo from "@/assets/phslogo.svg";
import mobilelogo from "@/assets/mobilelogo.svg";
import user from "@/assets/user.svg";
import Image from "next/image";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contextapi";
import { AiOutlineLogout } from "react-icons/ai";
import { LOG_OUT } from "@/api/services/auth";
import toast from "react-hot-toast";

export const navlinks: NavLink[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Services",
    link: "/#services",
  },
  {
    id: 3,
    title: "About",
    link: "/#about",
  },
  {
    id: 4,
    title: "Contact",
    link: "/#contact",
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
  const { userProfile, setUserProfile } = useAuth();
  const nav = useRouter();
  const [open, setOpen] = useState<boolean>(false);
   const logoutRef = useRef<HTMLDivElement>(null);
  const [showLogOut, setShowLogOut] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const HandleLogin = () => {
    nav.push("/login");
  };

  const LogOutDropDown = () => {
    setShowLogOut(prev => !prev);
  };

 const handleClickOutside = (event: MouseEvent) => {
  if (logoutRef.current && !logoutRef.current.contains(event.target as Node)) {
    setShowLogOut(false);
  }
};

useEffect(() => {
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);
  
  const [isLoading, setIsLoading] = useState(false);

  const HandleLogOut = async (event:  React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); 
    try {
      setIsLoading(true);
      const response = await LOG_OUT();
      console.log("Log out successful:", response);
      if (response.status === 204) {
        localStorage.removeItem("phsAuthToken");
        localStorage.removeItem("phs_userprofile");
        localStorage.setItem("PHS_LoggedInUser", "false");
        toast.success("Log Out Successful!");
        nav.push("/login");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error: any) {
      console.log("Logout failed:", error);
      if (
        error.response.status === 401 &&
        error.response.data.detail === "Invalid token."
      ) {
        localStorage.removeItem("phsAuthToken");
        localStorage.removeItem("phs_userprofile");
        localStorage.setItem("PHS_LoggedInUser", "false");
        toast.success("Log Out Successful!");
        nav.push("/login");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } finally {
      setIsLoading(false);
      setShowLogOut(false);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("PHS_LoggedInUser");

    const userDetailsString = localStorage.getItem("phs_userprofile");
    if (userDetailsString !== null) {
      const userDetails = JSON.parse(userDetailsString);
      setUserProfile(userDetails);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav
      className={`
     w-full bg-[#fff] text-[#000] transition duration-500  h-[100px] ${className} flex items-center shadow-md`}
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
                className={`text-[18px]  ease-in-out duration-300 capitalize ${
                  active?.toLocaleLowerCase() === title.toLocaleLowerCase()
                    ? "text-primary font-[700]"
                    : "text-[#000] "
                }`}
              >
                <Link href={link}>{title}</Link>
              </li>
            ))}
        </ul>

        <div className="flex  items-center gap-[18px] lg:gap-[24px]">
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

          {userProfile ? (
            <div
              onClick={LogOutDropDown}
              className="relative cursor-pointer flex gap-[10px] lg:gap-[16px] items-center"
            >
              <p className="text-[14px]">
                {(userProfile && userProfile[0]?.name) || "Username"}
              </p>
              <Image src={user} alt="logo" />
              {showLogOut && (
                <div
                  onClick={HandleLogOut}
                  className="absolute -bottom-[44px] z-[999] rounded-[4px] right-0  bg-white p-2 gap-1 shadow flex items-center cursor-pointer"
                >
                  {isLoading ? (
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-red-200 h-6 w-6 mx-6"></div>
                  ) : (
                    <>
                      <div className="flex items-center justify-between w-[70px]">
                        <AiOutlineLogout size={20} color="#E94444" />
                        <p className="text-[14px] text-redColor"> Log out</p>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          ) : (
            <Button
              text="Login"
              onClick={HandleLogin}
              className=" text-white"
            />
          )}
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

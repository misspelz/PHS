import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface LayoutProps {
  children: React.ReactNode;
  activePage?: string;
}

const Layout = ({ children, activePage }: LayoutProps) => {
  return (
    <section className="w-full ">
      <Navbar active={activePage} />
      <main className="w-full max-w-[1440px] mx-auto ">{children}</main>
      <Footer />
    </section>
  );
};

export default Layout;

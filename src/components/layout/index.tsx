import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface LayoutProps {
  children: React.ReactNode;
  activePage?: string;
}

const Layout = ({ children, activePage }: LayoutProps) => {
  return (
    <section className="w-full relatve">
      <div className=" w-full">
        <Navbar active={activePage} />
      </div>
      {/*  max-w-[1500px] mx-auto  */}
      <main className="w-full">{children}</main>
      <Footer />
    </section>
  );
};

export default Layout;

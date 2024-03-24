// "use client";

import heromobilebg from "@/assets/mobileherobg.svg";
import herobg from "@/assets/phsherobg.svg";
import Button from "@/components/button";
import Navbar from "@/components/navbar";
import Layout from "@/components/layout";
import H1Heading from "@/components/headings/H1Heading";
import Hero from "@/components/home/hero";

const Home = () => {
  const activePage = "home";

  return (
    <Layout activePage={activePage}>
      <Hero />
      {/* Big Screen */}
      {/* <div
        className={` lg:flex flex-col hidden h-[800px] bg-cover bg-no-repeat bg-center`}
        style={{
          backgroundImage: `url(${herobg.src})`,
        }}
      >
        <Navbar active={activePage} />
        <div className="flex flex-col gap-4 items-start justify-center transform translate-y-[80%] px-6 lg:px-[123px] w-full lg:w-[1000px]">
          <H1Heading>Lorem ipsum dolor sit amet consectetur.</H1Heading>
          <p className="text-gray25  lg:w-[480px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            est sint nisi, voluptates fuga iste illo rem
          </p>
          <Button text="Get started" className="font-semibold bg-white" />
        </div>
      </div> */}

      {/* Mobile Screen */}
      {/* <div
        className="h-[800px] md:h-[500px] bg-cover bg-no-repeat background-position-x-right lg:hidden"
        style={{
          backgroundImage: `url(${heromobilebg.src})`,
        }}
      >
        <Navbar active={activePage} />
        <div className="flex flex-col gap-4 items-start justify-center transform translate-y-[30%]  px-6 lg:px-[123px] w-full lg:w-[1000px]">
          <H1Heading>Lorem ipsum dolor sit amet consectetur.</H1Heading>
          <p className="text-gray25  lg:w-[480px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            est sint nisi, voluptates fuga iste illo rem
          </p>
          <Button text="Get started" className="font-semibold bg-white" />
        </div>
      </div> */}
    </Layout>
  );
};

export default Home;

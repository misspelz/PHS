// "use client";

import Layout from "@/components/layout";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
// import { useState } from "react";

const Home = () => {
  const activePage = "home";

  // const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* {isLoading ? (
        <div>please wait...</div>
      ) : ( */}
      <Layout activePage={activePage}>
        <Hero />
        <Services />
      </Layout>
      {/* )} */}
    </>
  );
};

export default Home;

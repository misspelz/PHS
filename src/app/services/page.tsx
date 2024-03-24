import Hero from "@/components/home/hero";
import Layout from "@/components/layout";
import React from "react";

const Services = () => {
  const activePage = "services";

  return (
    <Layout activePage={activePage}>
      <Hero />
    </Layout>
  );
};

export default Services;

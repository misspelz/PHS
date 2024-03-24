import Hero from '@/components/home/hero';
import Layout from "@/components/layout";
import React from "react";

const AboutUs = () => {
  const activePage = "about";

  return (
    <Layout activePage={activePage}>
      <Hero />
    </Layout>
  );
};

export default AboutUs;

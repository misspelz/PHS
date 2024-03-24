import Hero from "@/components/home/hero";
import Layout from "@/components/layout";
import React from "react";

const Contact = () => {
  const activePage = "contact";

  return (
    <Layout activePage={activePage}>
      <Hero />
    </Layout>
  );
};

export default Contact;

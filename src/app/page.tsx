import Layout from "@/components/layout";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import AboutUs from "@/components/home/aboutus";
import Reviews from "@/components/home/reviews";
import ContactUs from "@/components/home/contactus";

const Home = () => {
  const activePage = "home";

  return (
    <>
      <Layout activePage={activePage}>
        <Hero />
        <Services />
        <AboutUs />
        <Reviews />
        <ContactUs />
      </Layout>
    </>
  );
};

export default Home;

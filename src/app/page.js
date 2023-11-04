import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Feature from "@/components/HomePageCmp/Feature";
import Hero from "@/components/HomePageCmp/Hero";
import HowItWork from "@/components/HomePageCmp/HowItWork";
import NewsLetter from "@/components/NewsLetter";

const page = () => {
  return (
    <>
      <Header />
      {/* hero section */}
      <Hero />
      {/* Feature Section */}
      <Feature />
      {/*How It Work Section */}
      <HowItWork />
      {/* NewsLetter Section */}
      <NewsLetter />
      <Footer />
    </>
  );
};

export default page;

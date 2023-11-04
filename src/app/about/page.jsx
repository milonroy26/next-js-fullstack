import AboutInfo from "@/components/AboutPageCmp/AboutInfo";
import Counter from "@/components/AboutPageCmp/Counter";
import Team from "@/components/AboutPageCmp/Team";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const page = () => {
  return (
    <>
      <Header />
      {/* About info */}
      <AboutInfo />
      {/* Counter */}
      <Counter />
      {/* Team */}
      <Team />
      <Footer />
    </>
  );
};

export default page;

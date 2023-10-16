import AboutInfo from "@/components/AboutPageCmp/AboutInfo";
import Counter from "@/components/AboutPageCmp/Counter";
import Team from "@/components/AboutPageCmp/Team";

const page = () => {
  return (
    <>
      {/* About info */}
      <AboutInfo />
      {/* Counter */}
      <Counter />
      {/* Team */}
      <Team />
    </>
  );
};

export default page;

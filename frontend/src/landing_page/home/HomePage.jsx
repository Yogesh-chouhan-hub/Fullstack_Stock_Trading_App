import Hero from "./Hero";
import Awards from "./Awards";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Education from "./Education";
import OpenAccount from "../OpenAccount";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </div>
  );
};

export default HomePage;

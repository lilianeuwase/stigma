import AboutUs from "../components/aboutus/aboutus";
import Animate from "../components/home/animate";
import Hero from "../components/home/hero";
import Hero2 from "../components/home/hero2";
import Icons from "../components/home/icons";
import More from "../components/home/more";
import MoreBefore from "../components/home/morebefore";
import Stats from "../components/home/stats";

import Navbar from "../components/navbar";

export default function HomePage() {
  return (
    <div>
    <Navbar/>
      <Hero />
      <Icons />
      <Hero2 />
      {/* <Stats2 /> */}
      {/* <Animate /> */}
      <Stats />
      <More/>
      {/* <MoreBefore/> */}
      <AboutUs/>
    </div>
  );
}

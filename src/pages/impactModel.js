import ImpactAnimate from "../components/impact/impactAnimate";
import ImpactFeature from "../components/impact/impactFeature";
import ImpactHero from "../components/impact/impactHero";
import ImpactIntro from "../components/impact/impactIntro";
import Quotes from "../components/impact/quotes";

import Navbar from "../components/navbar";

export default function ImpactModel() {
  return (
    <div>
     <Navbar/>
      <ImpactIntro />
      <ImpactHero />
      <Quotes />
      <ImpactFeature />
      <ImpactAnimate />
    </div>
  );
}

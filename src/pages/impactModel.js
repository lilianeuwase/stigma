

import ImpactAnimate from "../components/impact/impactAnimate";
import ImpactFeature from "../components/impact/impactFeature";
import ImpactHero from "../components/impact/impactHero.js";
import ImpactIntro from "../components/impact/impactIntro";
import Quotes from "../components/quotes";

export default function ImpactModel() {
  return (
    <div>
      <ImpactIntro />
      <ImpactHero />
      <Quotes />
      <ImpactFeature />
      <ImpactAnimate />
    </div>
  );
}

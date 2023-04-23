import Checks from "../components/checks";
import Columns from "../components/columns";
import Hero from "../components/impact/hero";
import Impact from "../components/impact/impact";
import ImpactFeature from "../components/impact/impactFeature";
import ImpactHero from "../components/impact/impactHero.js";
import ImpactVideo from "../components/impact/impactVideo";
import Quotes from "../components/quotes";
import Stats from "../components/stats";

export default function ImpactModel() {
  return (
    <div>
      <Hero />
      <ImpactHero />
      <Quotes />
      <ImpactFeature />
      <Impact />
    </div>
  );
}

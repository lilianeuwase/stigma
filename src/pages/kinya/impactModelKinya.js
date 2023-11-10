import ImpactAnimateKinya from "../../components/kinya/impact/impactAnimateKinya";
import ImpactFeatureKinya from "../../components/kinya/impact/impactFeatureKinya";
import ImpactHeroKinya from "../../components/kinya/impact/impactHeroKinya";
import ImpactIntroKinya from "../../components/kinya/impact/impactIntroKinya";
import QuotesKinya from "../../components/kinya/impact/quotesKinya";
import NavbarKinya from "../../components/kinya/navbarKinya";

export default function ImpactModelKinya() {
  return (
    <div>
     <NavbarKinya/>
      <ImpactIntroKinya />
      <ImpactHeroKinya />
      <QuotesKinya />
      <ImpactFeatureKinya />
      <ImpactAnimateKinya />
    </div>
  );
}

import AboutUsKinya from "../../components/kinya/aboutus/aboutusKinya";
import Hero2Kinya from "../../components/kinya/home/hero2Kinya";
import HeroKinya from "../../components/kinya/home/heroKinya";
import IconsKinya from "../../components/kinya/home/iconsKinya";
import MoreKinya from "../../components/kinya/home/moreKinya";
import StatsKinya from "../../components/kinya/home/statsKinya";
import NavbarKinya from "../../components/kinya/navbarKinya";


export default function HomePageKinya() {
  return (
    <div>
    <NavbarKinya/>
      <HeroKinya />
      <IconsKinya />
      <Hero2Kinya />
      <StatsKinya />
      <MoreKinya/>
      <AboutUsKinya/>
    </div>
  );
}

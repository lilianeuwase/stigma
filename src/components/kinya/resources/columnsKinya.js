import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import HeroStatsKinya from "./heroStatsKinya";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

export default function ColumnsKinya() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-40 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:max-w-auto">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Amasezerano ya Maputo
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Amasezerano ya Maputo, azwi kandi ku izina rya ‘’African Protocol
              “ ku burenganzira bw’abagore, ni igikoresho cy'uburenganzira bwa
              muntu cyemejwe n'Umuryango wa Afurika Yunze Ubumwe mu 2003. Aya
              masezerano akemura ibibazo bitandukanye bijyanye n'uburenganzira
              bw’abagore, harimo n'ubuzima bw’imyorokere n'uburenganzira.
              By’umwihariko, Ingingo ya 14 y'amasezerano ya Maputo ivuga ko
              "Ibihugu bigomba kumenya niba uburenganzira ku buzima bw'abagore,
              harimo n'ubuzima bw'imibonano mpuzabitsina n'ubuzima
              bw’imyororokere, bwubahirizwa kandi buhabwa agaciro.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Amasezerano ya Maputo yashimiwe nk'intambwe ikomeye mu guteza
              imbere uburenganzira bw’imyororokere bw'abagore muri Afurika.
              Icyakora, ishyirwa mu bikorwa ry'aya masezerano ryagaragaye mu
              bihugu bitandukanye, kandi kwemererwa gukuramo inda ,, kandi
              byemewe n'amategeko biracyari ikibazo gikomeye mu bice byinshi
              by'umugabane.
            </p>
          </div>
          <HeroStatsKinya />
        </div>
      </div>
    </div>
  );
}

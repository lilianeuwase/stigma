import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import HeroStats from "./heroStats";

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

export default function Columns() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-40 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:max-w-auto">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Maputo Protocol
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The Maputo Protocol, also known as the African Protocol on the
              Rights of Women, is a human rights instrument adopted by the
              African Union in 2003. The protocol addresses a range of issues
              related to women's rights, including reproductive health and
              rights. In particular, Article 14 of the Maputo Protocol states
              that, "States Parties shall ensure that the right to health of
              women, including sexual and reproductive health, is respected and
              promoted."
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The Maputo Protocol has been hailed as a significant step forward
              in advancing women's reproductive rights in Africa. However,
              implementation of the protocol has been uneven across different
              countries, and access to safe and legal abortion remains a
              contentious issue in many parts of the continent.
            </p>
          </div>
          <HeroStats />
        </div>
      </div>
    </div>
  );
}

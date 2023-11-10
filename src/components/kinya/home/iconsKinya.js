import { CurrencyDollarIcon, HandRaisedIcon, HandThumbUpIcon, LightBulbIcon } from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  BuildingOffice2Icon,
  ScissorsIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Kwigenga ku mibiri yabo( abagore)",
    description:
      "Uburenganzira  bwo gukuramo inda bufasha abagore kugenzura imibiri yabo no gufata ibyemezo ku buzima bwabo bw’imyororokere.",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Ubuzima n’umutekano",
    description:
      "Iyo gukuramo inda byemewe n'amategeko , bishobora gukorwa mu buryo bwizewe kandi bwitondewe, bigabanya ibyago byaterwa no kubikora mu buryo butizewe kandi budasobanutse.",
    icon: HandThumbUpIcon,
  },
  {
    name: "Uburemganzira bwo kubyara",
    description:
      "Gukuramo inda ni ikintu cy’ingenzi  mu bijyanye n'uburenganzira ku buzima bw’imyororokere.",
    icon: LightBulbIcon,
  },
  {
    name: "Kugabanya imfu z’ababyeyi bapfa babyara",
    description:
      "Gukuramo inda mu buryo budafite umutekano ni kimwe mu bitera impfu z'ababyeyi  bapfa babyara ku isi. Guverinoma zishobora gufasha kugabanya izo mfu zatewe nuko zakuwemo mu buryo butizewe zifasha gushyiraho uburyo bwo gukuramo inda bwemewe n’amategeko.",
    icon: ScissorsIcon,
  },
  {
    name: "Ingaruka  ku bukungu n'imibereho myiza y'abaturage",
    description:
      "Inda zitateganyijwe zishobora kugira ingaruka zikomeye ku bukungu  n’imibereho myiza by’abagore, imiryango yabo na sosiyete.",
    icon: ArrowPathIcon,
  },
  {
    name: "Icyo bimariye ubuzima bwabaturage",
    description:
      "Gukuramo inda bigira uruhare mu buzima bw'abaturage binyuze mu kugabanya ibyago byaterwa no gukuramo inda hakoreshejwe uburyo butizewe bishobora gutera ibibazo, infegisiyo ndetse n’ uburwayi b’w igihe kirekire.",

    icon: CurrencyDollarIcon,
  },
];

export default function IconsKinya() {
  return (
    <div className="bg-white py-24 sm:py-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
       
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Kuki gukuramo inda mu buryo bwemewe n'amategeko ari ingenzi?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {/* The number of illegal abortion is low compared to other neighbors’
            countries and other countries in sub Saharan Africa. The capital
            city of Rwanda, Kigali, counts one third of all abortions in Rwanda. */}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

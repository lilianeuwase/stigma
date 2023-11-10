import { CursorArrowRaysIcon } from "@heroicons/react/20/solid";
import {
  AcademicCapIcon,
  BoltSlashIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Untrained.",
    description:
      "Muri rusange, kimwe cya kabiri cy'abakuramo inda mu Rwanda bikorwa n'abantu batabihuguriwe, bityo bishobora gushyira ubuzima bw’abantu mu kaga, ugereranyije, abagera kuri 34% bafashwa n’abavuzi gakondo naho 17%  nibo bazikuriramo.",
    icon: BoltSlashIcon,
  },
  {
    name: "Trained.",
    description:
      "Hafi kimwe cya kabiri cy'abakuramo inda bose bikorwa  n'abaganga  babihuguwe kunyamwuga  (19%), abaforomo cyangwa abafasha b'abaganga(16%) n'ababyaza babihuguriwe (14%). Icyakora ntibabikorera ahabugenewe( kwa muganga) bityo bikaba byatera ibibazo. kandi bitera ibibazo.",
    icon: AcademicCapIcon,
  },
  {
    name: "Rural.",
    description:
      "Abagore b’abakene bo mu cyaro nibo bakunze kujya ku bantu batahuguriwe gukuramo inda,  cyangwa bakazikuriramo: 74% by'abakuramo  inda ni aho bituruka, ugereranyije n’abagore badafite ubukene kuko bo bafite 15%.",
    icon: BuildingStorefrontIcon,
  },
];

const links = [
  { name: " Her age", href: "#" },
  { name: " Her occupation", href: "#" },
  { name: " Medical conditions", href: "#" },
  { name: " Unintended pregnancy", href: "#" },
  { name: " Rape pregnancy", href: "#" },
  { name: " Unreadiness", href: "#" },
];
const stats = [
  { name: "Procedures by women themselves", value: "67%" },
  { name: "Procedures by traditional healers ", value: "61%" },
  { name: "No medical attention", value: "30%" },
  { name: "Poor untrained/self-induced women", value: "15%" },
  ,
];

export default function StatsKinya() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-20">
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 text-left">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl rose-line">
          Ikibazo cyo gukuramo inda mu buryo budasobanutse mu Rwanda
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Ibyago biterwa no  gukuramo inda bifitanye isano ikomeye n'uburyo iyo nda yakuwemo. Bitewe n’ukuntu amategeko akomeye n’akato gakorerwa abazikuramo,abagore bashaka gukuramo inda akenshi bakoresha uburyo bwihishe kandi buteye inkeke, ndetse butinizewe.
            <br />
            <br />
          </p>

          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon
                    className="absolute left-1 top-1 h-5 w-5 text-rose-500"
                    aria-hidden="true"
                  />
              
                </dt>{" "}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

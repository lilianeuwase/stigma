import ImpactVideo from "./impactVideo";

import {
  ClipboardDocumentCheckIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  LockOpenIcon,
  NoSymbolIcon,
  ServerIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Mu guhangana n'umuco wo guceceka, dushobora gutera imbaraga abagore, umuco wo kuvuga",
    description: "",
    icon: SpeakerWaveIcon,
  },
  {
    name: "Tuganire ku bijyanye no gukuramo inda, kuko ni ibisanzwe",
    description: "",
    icon: LockOpenIcon,
  },
  {
    name: "Gufasha abature kubona amakuru yagenzuwe kandi agezweho",
    description: "",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Dushobora kwirinda ibihuha/ibitekerezo bitari byo, bityo bikaba bigabanya akato gahabwa abakuramo inda",
    description: "",
    icon: NoSymbolIcon,
  },
];

export default function ImpactHeroKinya() {
  return (
    <div className="bg-white py-24 sm:py-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <div className="mx-auto max-w-2xl sm:text-center"></div> */}
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-0 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto lg:max-w-3xl">
            <h3 className="text-2xl font-bold tracking-tight text-rose-500">
              Ibyo Dusabwa
            </h3>
            <p className="mt-2 text-base leading-7 text-gray-600">
            Kimwe mu bintu by'ingenzi bituma akato gahabwa abakuramo inda kadacika  ni umuco wo guceceka mu'abagore /abakobwa  na  sosiyetemuri rusange:
            </p>
            <dl className="mt-4 max-w-xl space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9 text-left">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-rose-500"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                Tugane
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                  Dufatanyije 
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                  Tuzatsinda
                  </span>
                </p>
                <a
                  href="/getinvolved"
                  className="mt-10 block w-full rounded-md bg-rose-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Fatanya Natwe
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                 Tobora uvuge
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

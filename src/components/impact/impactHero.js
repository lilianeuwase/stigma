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
    name: "By challenging the silent culture we can empower women, The speak up culture",
    description: "",
    icon: SpeakerWaveIcon,
  },
  {
    name: "Let's make conversations around abortion normal, because they are normal",
    description: "",
    icon: LockOpenIcon,
  },
  {
    name: "By improving community access to updated and verified abortion information",
    description: "",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Together we can avoid the myths/misconceptions, thus reducing abortion stigma",
    description: "",
    icon: NoSymbolIcon,
  },
];

export default function ImpactHero() {
  return (
    <div className="bg-white py-24 sm:py-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <div className="mx-auto max-w-2xl sm:text-center"></div> */}
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-0 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto lg:max-w-3xl">
            <h3 className="text-2xl font-bold tracking-tight text-rose-500">
              Abortion Stigma Essential Grounds
            </h3>
            <p className="mt-2 text-base leading-7 text-gray-600">
              One of the essential grounds abortion stigma persists is the
              culture of silent among women/girls and community at large:
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
                  Join Us
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                   Together
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    We win
                  </span>
                </p>
                <a
                  href="/getinvolved"
                  className="mt-10 block w-full rounded-md bg-rose-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Involved
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                 Speak up, let's empower ourselves
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

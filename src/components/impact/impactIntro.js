import { CheckBadgeIcon, LightBulbIcon, SpeakerWaveIcon, UserGroupIcon } from "@heroicons/react/20/solid";
import ImpactVideo from "./impactVideo";

const includedFeatures = [
  {
    name: "Speak Up",
    icon: SpeakerWaveIcon,
  },
  {
    name: "Empower Women",
    icon: LightBulbIcon,
  },
  {
    name: "Abortion Conversations",
    icon: UserGroupIcon,
  },
  {
    name: "Access to Safe Abortion",
    icon: CheckBadgeIcon,
  },
];

export default function ImpactIntro() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-16">
      <div className="mx-auto max-w-8xl px-16 lg:px-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <ImpactVideo />
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-2xl">
              {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Fight Stigma
              </h2> */}
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                A community Model to fight Abortion Stigma
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Abortion stigma is defined as a set of attitudes and beliefs,
                either conscious or Unconscious, that abortion is bad, shameful,
                or wrong within a given community and therefore, women who had
                abortion or who seek abortion are stigmatized as well as
                healthcare providers associated with abortion. At the end of the
                day, women remain with no choices and denied their fundamental
                human right.
                <div className="mt-8 items-center gap-x-4">
                
                  <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600 text-center">
                    Fight the Stigma
                  </h4>
                  <div className="h-px flex-auto bg-gray-100" />
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                >
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex gap-x-3 font-semi-bold">
                      <feature.icon
                        className="h-6 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </li>
                  ))}
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr
        className="mt-12"
        style={{
          background: "#f43f5e",
          height: "5px",
          border: "none",
        }}
      />
    </div>
  );
}

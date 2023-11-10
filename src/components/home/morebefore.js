import "./more.css";
import {
  AcademicCapIcon,
  BoltSlashIcon,
  BookmarkSlashIcon,
  BuildingStorefrontIcon,
  CloudArrowUpIcon,
  CursorArrowRippleIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Untrained.",
    description:
      "Overall, half of all abortions in Rwanda are performed by untrained individuals and are considered to be very high risk, an estimated 34% are provided by traditional healers and 17% are induced by the women themselves.",
    icon: BoltSlashIcon,
  },
  {
    name: "Trained.",
    description:
      "About half of all abortions are provided by trained health professionals physicians (19%), nurses or medical assistants (16%) and trained midwives (14%). But many procedures do not take place in health facilities and result in complications.",
    icon: AcademicCapIcon,
  },
  {
    name: "Rural.",
    description:
      "Poor rural women are the most likely to go to untrained providers or to self-induce: Seventy-four percent of their abortions are from these sources, compared with 15% of those for non-poor women.",
    icon: BuildingStorefrontIcon,
  },
];

const features1 = [
  {
    name: "Abortion Stigma.",
    description:
      "Stigma creates discomfort around abortion, which contributes to misinformation and lack of knowledge about abortion. That misinformation and pervasive stigma is weaponized to build and maintain barriers to abortion.",
    icon: BookmarkSlashIcon,
  },
  {
    name: "Little knowledge.",
    description:
      "The adolescent period is a very crucial period of life, and they are in the transition phase so because of love and curiosity they may involve in sexual intercourse and due to the lack of knowledge and awareness in deciding what is irrational that could force them to adopt many unsafe experiences.",

    icon: CursorArrowRippleIcon,
  },
  // {
  //   name: "Rural.",
  //   description:
  //     "Poor rural women are the most likely to go to untrained providers or to self-induce: Seventy-four percent of their abortions are from these sources, compared with 15% of those for non-poor women.",
  //   icon: ServerIcon,
  // },
];

export default function MoreBefore() {
  return (
    <div className="bg-gray-100 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-20">
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:space-y-0">
            <div className="lg:max-w-lg text-left">
              <hr className="mb-8 left-line" />
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                The situation of clandestine abortion in Rwanda
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                The health risk of an abortion is directly related to how and by
                whom the procedure is performed. Because of legal restrictions
                and stigma, women seeking abortions often resort to clandestine
                procedures, where safety cannot be assured.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="lg:max-w-lg text-right">
              <hr className="mb-8 right-line" />
              <p className=" mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Abortion Stigma & Beliefs
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Abortion stigma is defined as a set of attitudes and beliefs,
                either conscious or unconscious, that abortion is bad, shameful,
                or wrong within a given community and therefore, women who had
                abortion or who seek abortion are stigmatized as well as
                healthcare providers associated with abortion. At the end of the
                day, women remain with no choices and denied their fundamental
                human right.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features1.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

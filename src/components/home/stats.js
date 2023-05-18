import { CursorArrowRaysIcon } from "@heroicons/react/20/solid";
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

export default function Stats() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-20">
      {/* <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      /> */}
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
            The situation of clandestine abortion in Rwanda
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {/* This shows that the issue of avoiding pregnancy is not recent as you
            may think. It was done even the introduction of different
            contraceptive methods. But */}
            The health risk of an abortion is directly related to how and by
            whom the procedure is performed. Because of legal restrictions and
            stigma, women seeking abortions often resort to clandestine
            procedures, where safety cannot be assured.
            <br />
            <br />
            {/* Overall, half of all abortions in Rwanda are performed by untrained
            individuals and are considered to be very high risk, an estimated
            34% are provided by traditional healers and 17% are induced by the
            women themselves.
            <br />
            Reasons that may prompt someone to do abortion at any cost are: */}
          </p>

          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon
                    className="absolute left-1 top-1 h-5 w-5 text-rose-500"
                    aria-hidden="true"
                  />
                  {/* {feature.name} */}
                </dt>{" "}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        {/* <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div> */}
      </div>
    </div>
  );
}

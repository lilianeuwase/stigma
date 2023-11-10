import {
    ArrowTrendingDownIcon,
    CalculatorIcon,
  CloudArrowUpIcon,
  GlobeEuropeAfricaIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function Hero2() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-0 lg:overflow-visible lg:px-0 lg:pb-12">
      {/* <div className="absolute inset-0 -z-10 overflow-hidden ">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div> */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              {/* <p className="text-base font-semibold leading-7 text-indigo-600">
                Rwanda
              </p> */}
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                What is abortion? What’s the status of it in Rwanda?
              </h1>
              {/* <p className="mt-6 text-xl leading-8 text-gray-700">
                Abortion is defined as the termination of pregnancy before 20
                weeks of pregnancy. Some of the countries even go up to 28 weeks
                of pregnancy.
              </p> */}
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-3xl rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={require("../../images/rwanda1.png")}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                {/* Although, abortion in Rwanda is illegal,  */}
                In 2009 about 60,000
                women and girls had abortion, according to the research of
                University of Rwanda, School of Public health. On average it’s
                25 women in 1000 aged between 14 and 44.
                <br/> <br/>
                Forty percent of Rwandan women having an abortion are subject to
              complications that require medical attention. Yet women are likely
              to experience complications at different rates based on where they
              obtain the abortion and who performed it. The complication rate is
              as high as 54–55% among poor women in both rural and urban areas.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ArrowTrendingDownIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      The number of illegal abortion is low compared to other
                      neighbors’ countries and other countries in sub Saharan
                      Africa.
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <GlobeEuropeAfricaIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      The capital city of Rwanda, Kigali counts one third of
                      all abortions in Rwanda.
                    </strong>{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

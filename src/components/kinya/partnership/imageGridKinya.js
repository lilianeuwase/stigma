
const features = [
  {
    name: "RYVC igamije ko urubyiruko n'abaturage bakorewe ihezwa bitabwaho, igamije gutanga uburezi bwuzuye ku byerekeye imyororokere hamwe no kunoza serivisi z’ibijyanye n’'ubuzima bw'imyororokere. RVC yanditse nk'ishyirahamwe ridaharanira inyungu.",
    description: "LP: N° 882/RGB/NGO/LP/02/2023",
  },
];

const features1 = [
  {
    name: "Inroads ni umuryango mpuzamahanga uharanira kwiga, gusangira ubumenyi, no gukora impinduka zirambye mu kugabanya akato gakorerwa abakuramo inda n'ingaruka z'ivangura mu gihugu no ku isi hose.",
    description:
      "Inroads yanditse nk'ishyirahamwe ridaharanira inyungu (EIN 84-3054114) muri Washington",
  },
];

export default function ImageGridKinya() {
  return (
    <div>
      <div className="bg-indigo-50 ">
      
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-20 sm:px-6 sm:py-0 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
         
          <div className="text-left">
            <div class="line1"></div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-indigo-800 sm:text-4xl ">
              Rwanda Youth Voice for Change
            </h2>
            <p className="mt-4 text-gray-500">
            Rwanda Youth Voice for Change (RYVC) ni umuryango udaharanira inyungu washyizweho mu 2009 Iri shyirahamwe ry'abakorerabushake riharanira gutangiza porogaramu zifite intego yo guteza imbere imibereho myiza y'abaturage.
            </p>

            <dl className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10  sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-gray-200 pt-4"
                >
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
            {/* <button
            type="submit"
            className="mt-6 flex w-100 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add to bag
          </button> */}

            <a
              href="https://www.rwandayvchange.org/"
              target="_blank"
              className="mt-6 w-64 inline-block rounded-md border border-transparent bg-indigo-800 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
            >
              RYVC
            </a>
          </div>
          <div className="grid  gap-4 sm:gap-6 lg:gap-8 ">
            <img
              src={require("../../../images/Students-pana.png")}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100 max-h-full"
            />
          </div>
        </div>
      </div>
      <div className="bg-white ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-20 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="grid  gap-4 sm:gap-6 lg:gap-8 ">
            <img
              src={require("../../../images/Black awareness-pana.png")}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100 max-h-full"
            />
          </div>
          <div className="text-left">
            <div class="line2"></div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-rose-500 sm:text-4xl ">
              Inroads
            </h2>

            <dl className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10  sm:gap-y-16 lg:gap-x-8">
              {features1.map((feature1) => (
                <div
                  key={feature1.name}
                  className="border-t border-gray-200 pt-4"
                >
                  <dt className="font-medium text-gray-900">{feature1.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature1.description}
                  </dd>
                </div>
              ))}
            </dl>
            {/* <button
            type="submit"
            className="mt-6 flex w-100 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add to bag
          </button> */}

            <a
              href="https://www.makeinroads.org/about-inroads"
              target="_blank"
              className="mt-6 w-64 inline-block rounded-md border border-transparent bg-rose-500 px-8 py-3 text-center font-medium text-white hover:bg-rose-300"
            >
              Inroads
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import AboutUs from "../aboutus/aboutus";

const features = [
  {
    name: "This voluntary organization strives at initiating programs whose aim is to promote the better living standards of the population. RYVC targets young people and marginalized population, linking the provision of comprehensive sexuality education with improved sexual and reproductive health and rights services. RYVC is registered as non-profit organization",
    description: "LP: N° 882/RGB/NGO/LP/02/2023",
  },
];

const features1 = [
  {
    name: "The International Network for the Reduction of Abortion Discrimination and Stigma is a global network and community of practice dedicated to learning, skill-sharing, and making sustainable and measurable changes to reduce abortion stigma and its discriminatory outcomes locally and across the globe.",
    description:
      "Inroads is registered as a 501c3 non-profit organization (EIN 84-3054114) in Washington State",
  },
];

export default function ImageGrid() {
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
              Rwanda Youth Voice for Change (RYVC) is a non-political,
              non-governmental and non-profit Organisation established in 2009
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
              src={require("../../images/Students-pana.png")}
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
              src={require("../../images/Black awareness-pana.png")}
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

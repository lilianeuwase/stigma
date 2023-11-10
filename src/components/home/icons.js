import { CurrencyDollarIcon, HandRaisedIcon, HandThumbUpIcon, LightBulbIcon } from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  BuildingOffice2Icon,
  ScissorsIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Women's bodily autonomy",
    description:
      "Access to abortion enables women to have control over their own bodies and make decisions about their reproductive health.",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Health and safety",
    description:
      "When abortion is legal and accessible, it can be performed in a safe and regulated manner, reducing the risks associated with unsafe, clandestine procedures.",
    icon: HandThumbUpIcon,
  },
  {
    name: "Reproductive rights",
    description:
      "Access to abortion is a fundamental component of reproductive rights.",
    icon: LightBulbIcon,
  },
  {
    name: "Reduction of maternal mortality",
    description:
      "Unsafe abortions are a leading cause of maternal mortality worldwide. By providing access to safe and legal abortion, governments can help reduce maternal deaths associated with unsafe procedures.",
    // ' and social and financial burdens for women, communities and health systems.',
    icon: ScissorsIcon,
  },
  {
    name: "Impact on socio-economic factors",
    description:
      "Unintended pregnancies can have significant socio-economic consequences for women, their families, and society.",
    icon: ArrowPathIcon,
  },
  {
    name: "Public health benefits",
    description:
      "Access to abortion contributes to public health by reducing the incidence of unsafe abortions, which can lead to complications, infections, and long-term health issues.",
    // ' and social and financial burdens for women, communities and health systems.',
    icon: CurrencyDollarIcon,
  },
];

export default function Icons() {
  return (
    <div className="bg-white py-24 sm:py-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
       
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why access to abortion matters ?
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

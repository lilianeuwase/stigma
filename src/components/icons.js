import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Health Intervention',
    description:
      'It is safe when carried out using a method recommended by WHO, appropriate to the pregnancy duration and by someone with the necessary skills',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Safety',
    description:
      'Six out of 10 of all unintended pregnancies end in an induced abortion, women needs safe and approved care',
    icon: LockClosedIcon,
  },
  {
    name: 'Awareness',
    description:
      'Due to stigma around abortion, Around 45% of all abortions are unsafe, of which 97% take place in developing countries',
    icon: ArrowPathIcon,
  },
  {
    name: 'Unsafe abortion',
    description:
      'Unsafe abortion is a leading but preventable cause of maternal deaths and morbidities. It can lead to physical and mental health complications',
      // ' and social and financial burdens for women, communities and health systems.',
    icon: FingerPrintIcon,
  },
]

export default function Icons() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Abortion Stigma</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Why access to abortion matters ?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          The number of illegal abortion is low compared to other neighbors’ countries and other countries in sub Saharan Africa. The capital city of Rwanda, Kigali, counts one third of all abortions in Rwanda
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

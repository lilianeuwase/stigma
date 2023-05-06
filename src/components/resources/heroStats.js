import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function HeroStats() {
  return (
    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
      <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-2">
        <div className="mx-auto max-w-xs px-8">
          <p className="mt-6 flex items-baseline justify-center gap-x-2">
            <span className="text-4xl font-bold tracking-tight text-indigo-600">
              1/7
            </span>
          </p>

          <p className="mt-4 text-base font-semibold text-black-600">
            Global unsafe abortions DEATHS related to pregnancy and childbirth
          </p>
        </div>
      </div>
      <div className="mt-2 rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-2">
        <div className="mx-auto max-w-xs px-8">
          <p className="mt-6 flex items-baseline justify-center gap-x-2">
            <span className="text-4xl font-bold tracking-tight text-indigo-600">
              9/10
            </span>
          </p>
          <p className="mt-4 text-base font-semibold text-black-600">
            African women of reproductive age live in countries with restrictive
            abortion laws
          </p>
        </div>
      </div>
      <div className="mt-2 rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-2">
        <div className="mx-auto max-w-xs px-8">
          <p className="mt-6 flex items-baseline justify-center gap-x-2">
            <span className="text-4xl font-bold tracking-tight text-indigo-600">
              52
            </span>
          </p>
          <p className="mt-4 text-base font-semibold text-black-600">
            African countries including Rwanda have signed or ratified the
            Maputo Protocol
          </p>
        </div>
      </div>
    </div>
  );
}

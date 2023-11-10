import "../../home/more.css";
import {
  BookmarkSlashIcon,
  CursorArrowRippleIcon,
} from "@heroicons/react/20/solid";

const features1 = [
  {
    name: "Akato Gakorerwa Abakuyemo Inda.",
    description:
      "Akato gatera kumva udakunze ibyo gukuramo inda, ibyo bikaba byatera  kutagira amakuru n’ubumenyi bihagije kuri byo.  Uko kutagira amakuru no guhabwa akato gakabije  bitizwa umurindi mu kuwanya gukuramo inda.",
    icon: BookmarkSlashIcon,
  },
  {
    name: "Ubumenyi Buke.",
    description:
      "Igihe cy'ubugimbi n’ubwangavu ni igihe cy'ingenzi cyane mu buzima,  bityo bitewe n'urukundo n'amatsiko bishobora kubashora  mu mibonano mpuzabitsina kandi bitewe no kubura ubumenyi no kumenya mu guhitamo igikwiye bishobora kubatera kugira imibereho itari myiza.",

    icon: CursorArrowRippleIcon,
  },
];

export default function MoreKinya() {
  return (
    <div className="bg-white py-24 sm:py-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <hr className="mb-8 middle-line" />
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Akato Gakorerwa Abakuramo Inda, n’Imyizerere
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600"></p>
        </div>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Akato gahabwa abakuramo inda ni nk'imyitwarire n'imyizerere,ushobora
          kugira ubizi cyangwa utabizi ivuga ivuga ko gukuramo inda ari bibi,
          biteye isoni, cyangwa ataribyo( bidakwiriye muri sosiyete y’abantu
          runaka, bityo, abagore bakuramo inda cyangwa bashaka kuzikuramo
          bahabwa akato ndetse n'abatanga serivisi z'ubuvuzi bafitanye isano no
          gukuramo inda. Birangira abagore nta mahitamo kandi bareka guharanira
          uburenganzira bwabo.
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
  );
}

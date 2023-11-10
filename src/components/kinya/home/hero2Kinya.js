import {
  ArrowTrendingDownIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/20/solid";

export default function Hero2Kinya() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-0 lg:overflow-visible lg:px-0 lg:pb-12">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Gukuramo inda ni iki? Ese mu Rwanda byifashe bite?
              </h1>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-3xl rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={require("../../../images/rwanda1.png")}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Mu mwaka wa 2009, abagore n'abakobwa bagera ku 60,000 bakuramo
                inda, nk'uko bigaragazwa n'ubushakashatsi bwakozwe na Kaminuza
                y'u Rwanda, Ishuri ry'Ubuzima rusange. Muri rusange, abagore 25
                mu 1000 bari hagati y'imyaka 14 na 44.
                <br /> <br />
                40% by'abagore bo mu Rwanda bakuramo inda bahura n’ibibazo
                bisaba kwitabwaho n'abaganga. Byongeye kandi, abagore bakunze
                kugira izo ngorane ku bigero bitandukanye ushingiye ku hantu
                bazikuriramo n'uwabikoze. Igipimo cy'ibibazo kiri hagati ya 54
                na 55% mu bagore bakennye haba mu cyaro no mu mijyi.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ArrowTrendingDownIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Umubare w'abakuramo inda mu buryo bunyuranyije n'amategeko
                      ni muto ugereranyije n'ibindi bihugu by'abaturanyi
                      n'ibindi bihugu byo muri Afurika yo munsi y'ubutayu bwa
                      Sahara.
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
                      Umurwa mukuru w'u Rwanda, Kigali, utuwe na kimwe cya
                      gatatu cy'abakuramo inda mu Rwanda.
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

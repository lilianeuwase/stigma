import "./hero.css";
export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white max-h-[39rem]">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-20 lg:pt-40">
        <div className=" mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-xl ">
            <h2 className="mb-4 text-base font-semibold leading-7 text-indigo-800">
              A community Model to fight Abortion Stigma
            </h2>
            <h1 className="font text-3xl font-bold tracking-tight text-indigo-600 sm:text-5xl mb-8 shine">
              Abortion
            </h1>
            <p className="mt-0 text-xl text-gray-900">
              Having a baby is one of the most enjoyable moment. Friends come with
              gifts and families throw parties to welcome the newborn. However,
              it is a different story when the pregnancy is not wanted, it
              results in unpleasant moments.
              {/* However, nowadays some of the pregnancies are not wanted so that
              having that baby is no longer something to enjoy. */}
              <br /> <br />
              All around the world various ways are used to avoid pregnancy, in
              Rwanda people used to perform old rituals, women would bath in
              dump water, and some families performed ceremonial protections on
              their young girls all in the name of avoiding unwanted pregnancies.
              {/* <br /> <br/>
              In all corners of the world, people use different ways to avoid
              pregnancy. In Rwanda, there are some old culture traditions that
              people use to perform in order to avoid pregnancy. Some of women
              would bath in dump water to avoid being pregnant in old age. Some
              of the families used to do some ceremonies to protect their young
              girls to be pregnant. */}
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src={require("../../images/Pregnancy test-bro.png")}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={require("../../images/Hospital patient-amico.png")}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={require("../../images/Gender violence-pana.png")}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={require("../../images/Gynecology consultation-cuate.png")}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={require("../../images/Gynecology consultation-rafiki.png")}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={require("../../images/Headache-pana.png")}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={require("../../images/Breast cancer awareness-amico.png")}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Shop Collection
                </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BluePanel() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-0 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-20 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Rwanda abortion law
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              More information on Rwanda abortion law: ministerial order
              n°002/moh/2019 of 08/04/2019 determining conditions to be
              satisfied for a medical doctor to perform an abortion
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                target="_blank"
                href="https://gazettes.africa/archive/rw/2019/rw-government-gazette-dated-2019-04-08-no-14.pdf"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                More info  <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <p className="mt-6 text-lg leading-8 text-gray-300">
              In 2019, the Rwandan government revised its guidelines for the
              provision of safe abortion services (official Gazette no.14 of
              08/04/2019), removing the requirement for a court order and two
              doctors' approval in certain circumstances. Currently, one doctor
              can perform abortion without a court order in cases where the
              pregnant person is a child, in cases of rape or forced marriage,
              in cases of incest pledged with a man to the second degree of
              kinship, and when the pregnancy presents a risk to the health of
              the mother or the fetus.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              This change is aimed at increasing access to safe and legal
              abortion services and reducing the barriers that women face in
              seeking abortion care. However, it is worth noting that access to
              safe and legal abortion services remains limited in some parts of
              the country, and that women may still face stigma and
              discrimination for seeking abortion care. As such, efforts to
              increase access to comprehensive reproductive health care services
              and to address the root causes of unintended pregnancy are
              ongoing.
            </p>
          </div>
        </div>
      </div>
      <hr
        className="mt-8"
        style={{
          background: "#4f46e5",
          height: "5px",
          border: "none",
        }}
      />
    </div>
  );
}

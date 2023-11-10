export default function DarkPanel() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-0 lg:px-8">
        <div className="relative isolate overflow-hidden bg-black px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-20 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              More Info on maputo Protocol
              <br />
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              It includes ensuring access to safe and legal abortion in cases
              of sexual assault, rape, incest, and where the life or health of
              the woman is at risk.
              <br/>
              <br/>
              In 2018, the African Commission on Human and
              Peoples' Rights issued a resolution calling on African Union
              member states to uphold the provisions of the Maputo Protocol and
              take steps to ensure access to safe and legal abortion.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                target="_blank"
                href="https://www.ohchr.org/sites/default/files/Documents/Issues/Women/WG/ProtocolontheRightsofWomen.pdf"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Learn more
                <span aria-hidden="true">→</span>
              </a>
              {/* <a
              target="_blank"
                href="https://www.ohchr.org/sites/default/files/Documents/Issues/Women/WG/ProtocolontheRightsofWomen.pdf"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src={require("../../images/darktheme1.jpeg")}
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

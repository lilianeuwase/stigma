export default function Quotes() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-14 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {/* <img
          className="mx-auto h-12"
          src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
          alt=""
        /> */}
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “Abortion has been stigmatized in the medical profession. Until
              recently the public and large segments of the medical profession
              considered abortion to be an unethical medical act regardless of
              its legal status…Communities do not like to be reminded that
              abortions are occurring within their boundaries…Candor invites
              both criticism and harassment; very few abortion clinics or
              physicians providing abortion services include the word abortion
              in the title identifying the activity”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src={require("../../images/dr-warren-hern-boulder-abortion-clinic.jpeg")}
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Dr. Warren Hern</div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">Abortion Practice Author</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

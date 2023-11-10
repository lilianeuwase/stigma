import { AtSymbolIcon, PhoneXMarkIcon } from "@heroicons/react/20/solid";
import Navbar from "../navbar";

const people = [
  {
    name: "info@rwandayvchange.org",
    role: "+250 786 111 498",
    imageUrl: require("../../images/Ndayizeye-nobg.png"),
  },
  // {
  //   name: "",
  //   role: "Instagram",
  //   imageUrl: ServerIcon,
  // },
  // {
  //   name: "",
  //   role: "Facebook",
  //   imageUrl:"https://fontawesome.com/icons/facebook-f?f=brands&s=solid&sz=2xs&pc=%23a78bfa",
  // },
  // {
  //   name: "",
  //   role: "LinkedIn",
  //   imageUrl:
  //     require("../../images/Ndayizeye.jpeg"),
  // },
];

export default function AboutUs() {
  return (
    <div>
    <div className="bg-indigo-200 py-24 sm:py-8 ">
      {/* <hr
        className="mb-12"
        style={{
          background: "#f43f5e",
          height: "5px",
          border: "none",
        }}
      /> */}
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get Involved
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get Involved with us and take part in fighting Abortion Stigma to ensure our women's safety and health, contact us
          </p>
        </div>

        <ul
          role="list"
          className="grid gap-x-0 gap-y-2 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 justify-items-center"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                {/* <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                /> */}
     
                <PhoneXMarkIcon
                  className="h-8 w-8 flex-none text-rose-600"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

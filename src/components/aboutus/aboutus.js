const people = [
  {
    name: "Dr. Jean Paul Ndayizeye",
    role: "Co-Founder / CEO",
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
    <div className="bg-white py-24 sm:py-32 ">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Adolescents and Abortion Stigma Project
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            This project was made possible through a partnership between Rwanda
            Youth Voice for Change and Inroad
          </p>
        </div>

        <ul
          role="list"
          className="grid gap-x-8 gap-y-2 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 justify-items-center"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
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
  );
}

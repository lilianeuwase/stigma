const posts = [
  {
    id: 1,
    title: "Abortion Stigma",
    href: "https://www.ipas.org/resource/abortion-stigma-ends-here-a-toolkit-for-understanding-and-action/",
    description:
      "Abortion stigma refers to the negative attitudes, beliefs, and stereotypes surrounding abortion. These attitudes and beliefs can be held by individuals, groups, and society as a whole. Abortion stigma can manifest in many ways, including social ostracism, discrimination, and even violence towards those who have had abortions, provide abortions, or support the right to access safe and legal abortion. Abortion stigma is often rooted in moral or religious beliefs, but it can also be influenced by cultural and societal norms, political ideologies, and misinformation about abortion. This stigma can have serious consequences for those seeking abortion care, including barriers to access, fear of judgment or rejection, and even harm to their physical and mental health. Reducing abortion stigma requires challenging harmful myths and misconceptions about abortion, promoting accurate information and education, and creating a culture of support and empathy for those who have had abortions or may consider it in the future. This includes ensuring access to comprehensive reproductive healthcare and legal protections for those seeking abortion care.",

    category: {
      title1: "More",
      href1: "https://www.ipas.org/resource/abortion-stigma-ends-here-a-toolkit-for-understanding-and-action/",
      title2: "More ..",
      href2: "https://www.ippf.org/our-approach/programmes/tackling-abortion-stigma",
      title3: "More ...",
      href3: "https://www.ippf.org/sites/default/files/2017-02/How%20to%20educate%20about%20abortion%20-%20The%20Essentials.pdf",      
    },
  },
  {
    id: 2,
    title: "Reducing Abortion Stigma",
    href: "https://www.plannedparenthoodaction.org/planned-parenthood-advocacy-fund-massachusetts-inc/abortion-stigma",
    description:
      "Reducing abortion stigma requires challenging harmful myths and misconceptions about abortion, promoting accurate information and education, and creating a culture of support and empathy for those who have had abortions or may consider it in the future. This includes ensuring access to comprehensive reproductive healthcare and legal protections for those seeking abortion care.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: {
      title1: "More",
      href1: "https://www.plannedparenthoodaction.org/planned-parenthood-advocacy-fund-massachusetts-inc/abortion-stigma",
      title2: "More ..",
      href2: "https://www.ippf.org/our-approach/programmes/tackling-abortion-stigma",
      title3: "More ...",
      href3: "https://www.ippf.org/sites/default/files/2017-02/How%20to%20educate%20about%20abortion%20-%20The%20Essentials.pdf",      
    
    },
  },
  {
    id: 3,
    title: "Health Consequences of Unsafe/Illegal Abortion",
    href: "#",
    description:
      "Forty percent of Rwandan women having an abortion are subject to complications that require medical attention. Yet women are likely to experience complications at different rates based on where they obtain the abortion and who performed it. The complication rate is as high as 54–55% among poor women in both rural and urban areas. Complication rates are highest for procedures that are induced by women themselves (67%) or are performed by traditional healers (61%), the kinds of procedures that poor rural women are more likely than other women to have. ",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: {
      title1: "More",
      href1: "https://www.ipas.org/resource/abortion-stigma-ends-here-a-toolkit-for-understanding-and-action/",
      title2: "More ..",
      href2: "https://www.ippf.org/our-approach/programmes/tackling-abortion-stigma",
      title3: "More ...",
      href3: "https://www.ippf.org/sites/default/files/2017-02/How%20to%20educate%20about%20abortion%20-%20The%20Essentials.pdf",      
    },
  },

  // More posts...
];

export default function ResMore() {
  return (
    <div className="bg-white py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Fact about abortion all women and girls should be informed
          </h2>
          <p className="mb-4 text-lg leading-8 text-gray-600">
            <br />
            Abortion is safe when it is carried out with a method that is
            recommended by WHO and that is appropriate to the pregnancy
            duration, and when the person carrying out the abortion has the
            necessary skills. There are two methods of abortion, which are
            categorized as ‘medical’ and ‘surgical’. Both types can be used at
            any stage of pregnancy and are available in all hospitals in Rwanda.
          </p>
          <a
            target="_blank"
            href="https://www.guttmacher.org/journals/psrh/2004/01/abortion-teaching-why-well-how"
            className="rounded-md bg-indigo-300 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            More info <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a target="_blank" href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-6 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>

              <div className="flex items-center gap-x-4 text-xs">
                <a
                  target="_blank"
                  href={post.category.href1}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-rose-700 ring-1 ring-inset ring-pink-700/10">
                    {post.category.title1}
                  </span>
                </a>
                <a
                  target="_blank"
                  href={post.category.href2}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-rose-700 ring-1 ring-inset ring-pink-700/10">
                    {post.category.title2}
                  </span>
                </a>
                <a
                  target="_blank"
                  href={post.category.href3}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-rose-700 ring-1 ring-inset ring-pink-700/10">
                    {post.category.title3}
                  </span>
                </a>
              </div>
              
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

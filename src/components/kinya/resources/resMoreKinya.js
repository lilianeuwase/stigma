const posts = [
  {
    id: 1,
    title: "Akato Gahabwa Abakuramo Inda",
    href: "https://www.ipas.org/resource/abortion-stigma-ends-here-a-toolkit-for-understanding-and-action/",
    description:
      "Akato gahabwa abakuramo inda kagendera ku myitwarire mibi, imyizerere n’ibitekerezo bafite kubijyanye gukuramo inda. Iyi myumvire n'imyizerere bishobora kugirwa n'abantu ku giti cyabo, amatsinda na sosiyete muri rusange. Akato gahabwa abakuramo inda gashobora kugaragara mu buryo bwinshi, harimo iheza, ivangura, ndetse n'ihohoterwa rikorerwa abantu bigeze gukuramo inda, abafasha abandi gukuramo inda, cyangwa abashyigikira uburenganzira bw’uko gukuramo inda byakwemerwa n’amategeko . Akato gahabwa abakuramo inda akenshi gashingiye ku myizerere y'imyitwarire ishingiye ku idini cyangwa ku iyobokamana, ariko gashobora no guterwa n’umuco w’abantu, ingengabitekerezo, n'amakuru atari yo ku bijyanye no gukuramo inda. Aka kato  gashobora gutera ingaruka zikomeye ku bifuza  ubufasha bwo gukuramo inda, harimo inzitizi zo kubona iyo serivise, gutinya kuvugwa cyangwa kwangwa, ndetse no kwangirika ku mubiri n’ubuzima bwo mu mutwe.",

    category: {
      title1: "Komeza",
      href1:
        "https://www.ipas.org/resource/abortion-stigma-ends-here-a-toolkit-for-understanding-and-action/",
      title2: "Komeza ..",
      href2:
        "https://www.ippf.org/our-approach/programmes/tackling-abortion-stigma",
      title3: "Komeza ...",
      href3:
        "https://www.ippf.org/sites/default/files/2017-02/How%20to%20educate%20about%20abortion%20-%20The%20Essentials.pdf",
    },
  },
  {
    id: 2,
    title: "Kugabanya Akato Gahabwa Abakuramo Inda",
    href: "https://www.plannedparenthoodaction.org/planned-parenthood-advocacy-fund-massachusetts-inc/abortion-stigma",
    description:
      "Kugabanya akato gahabwa abakuramo inda  bisaba guhangana ni ibihuha n'ibitekerezo bitari byo ku bijyanye no gukuramo inda, gushishikariza kubona amakuru ya nyayo  no kwigishwa, ikindi kandi, no gushyiraho umuco wo gushyigikira no  kwereka abakuyemo inda cyangwa abashobora kubikora mu gihe kiri imbere ko ubumva, ubafitiye impuwe. Muri ibyo harimo uburyo bwo kubona  ubuvuzi ku buzima bw’imyororokere no gufasha ku buryo bwemewe n’amategeko abifuza gukuramo inda.",

    category: {
      title1: "Komeza",
      href1:
        "https://www.plannedparenthoodaction.org/planned-parenthood-advocacy-fund-massachusetts-inc/abortion-stigma",
      title2: "Komeza ..",
      href2:
        "https://www.ippf.org/our-approach/programmes/tackling-abortion-stigma",
      title3: "Komeza ...",
      href3:
        "https://www.ippf.org/sites/default/files/2017-02/How%20to%20educate%20about%20abortion%20-%20The%20Essentials.pdf",
    },
  },
  {
    id: 3,
    title: "Ingaruka Zo Gukuramo Inda Mu Buryo Butizewe",
    href: "#",
    description:
      "40% by'abagore bo mu Rwanda bakuramo inda bahura n’ibibazo bisaba kwitabwaho n'abaganga. Byongeye kandi, abagore bakunze kugira izo ngorane ku bigero  bitandukanye ushingiye ku hantu bazikuriramo n'uwabikoze. Igipimo cy'ibibazo kiri hagati ya 54 na 55% mu bagore bakennye haba mu cyaro no mu mijyi.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: {
      title1: "Komeza",
      href1:
        "https://www.ipas.org/resource/abortion-stigma-ends-here-a-toolkit-for-understanding-and-action/",
      title2: "Komeza ..",
      href2:
        "https://www.ippf.org/our-approach/programmes/tackling-abortion-stigma",
      title3: "Komeza ...",
      href3:
        "https://www.ippf.org/sites/default/files/2017-02/How%20to%20educate%20about%20abortion%20-%20The%20Essentials.pdf",
    },
  },

  // More posts...
];

export default function ResMoreKinya() {
  return (
    <div className="bg-white py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Ukuri ku gukuramo inda abagore n'abakobwa bose bagomba kubimenyeshwa
          </h2>
          <p className="mb-4 text-lg leading-8 text-gray-600">
            <br />
            Gukuramo inda biba byizewe iyo byakozwe hifashishijwe uburyo
            bwatanzwe na OMS kandi ibyo bikaba bikwiye mu igihe cyo
            gutwita,n’igihe umuntu akuramo inda afite ubumenyi buhagije. Hari
            uburyo bubiri bwo gukuramo inda, bufatwa nk'"ubuvuzi" no "kubaga."
            Ubwo buryo bwombi bushobora gukoreshwa mu gihe icyo ari cyo cyose
            cyo gutwita kandi buboneka mu bitaro byose byo mu Rwanda.
          </p>
          <a
            target="_blank"
            href="https://www.guttmacher.org/journals/psrh/2004/01/abortion-teaching-why-well-how"
            className="rounded-md bg-indigo-300 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Andi makuru <span aria-hidden="true">→</span>
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

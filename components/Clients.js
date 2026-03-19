import Image from "next/image";

const clients = [
  {
    name: "TPFX Bali",
    description:
      "TPFX Bali adalah platform trading forex dan komoditas yang kami bantu kembangkan presence digital-nya. Mulai dari pengelolaan social media, pembuatan konten edukatif seputar trading, hingga strategi iklan digital untuk menjangkau calon trader baru di seluruh Indonesia.",
    tag: "Social Media Management",
    color: "from-blue-900 to-[#1B3A6B]",
    logo: "/tpfx.png",
  },
  {
    name: "Kalimutu Fitness",
    description:
      "Kalimutu Fitness adalah sebuah gym modern di Bali yang kami bantu melalui layanan advertising. Kami merancang dan menjalankan kampanye iklan untuk meningkatkan awareness, mendatangkan member baru, serta memaksimalkan ROI dari setiap budget iklan yang dikeluarkan.",
    tag: "Advertising",
    color: "from-[#0F2347] to-blue-800",
    logo: "/kf.png",
  },
];

export default function Clients() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Our Clients
          </h2>
        </div>
        <p className="text-center text-gray-500 mb-12 max-w-md mx-auto text-sm leading-relaxed">
          From simple ideas to complex digital transformations, we've helped our
          clients turn their vision into reality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clients.map((client, i) => (
            <div
              key={i}
              className={
                "bg-gradient-to-br " +
                client.color +
                " rounded-3xl p-8 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              }
            >
              {/* Logo */}
              <div className="w-fit">
                <Image
                  src={client.logo}
                  width={120}
                  height={50}
                  alt={client.name + " logo"}
                  className="object-contain"
                />
              </div>

              <h3 className="text-white font-black text-xl">{client.name}</h3>
              <p className="text-blue-200 text-sm leading-relaxed flex-1">
                {client.description}
              </p>
              <button className="self-start bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/20 transition-all">
                {client.tag} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

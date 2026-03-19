import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#1B3A6B] py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Illustration */}
          <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80">
            <div className="w-full h-full bg-white/10 rounded-3xl flex items-center justify-center relative overflow-hidden border border-white/20">
              {/* Two people chatting illustration */}
              <Image src="/hero.png" width={900} height={100} alt="Logo" />
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left max-w-xl">
            <p className="text-[#1DC9D3] font-semibold text-sm mb-3 tracking-wide uppercase">
              Who we are?
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Transforming Ideas Into Digital Reality
            </h2>
            <p className="text-blue-200 text-base md:text-lg leading-relaxed">
              We are a team of creative thinkers and digital strategists who
              believe every brand has a uniquestory. Through design, technology,
              and marketing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

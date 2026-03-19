import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/3 opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50 rounded-full translate-y-1/2 -translate-x-1/3 opacity-50 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-5">
              We Help Businesses Grow with{" "}
              <span className="text-[#1B3A6B]">Creative Digital Solutions</span>
            </h1>
            <p className="text-gray-500 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Grow your brand online with creative design, smart strategy, and
              impactful digital solutions — all in one place.
            </p>
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-[#1B3A6B] text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#0F2347] transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* Illustration */}
          <Image src="/heroo.jpg" width={500} height={100} />
        </div>
      </div>
    </section>
  );
}

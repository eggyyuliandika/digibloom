"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

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
  {
    name: "Balimoon Art & Space",
    description:
      "Balimoon Art and Space adalah sebuah pusat kreatif di Bali yang kami bantu melalui layanan pembuatan website. Kami merancang dan mengembangkan website untuk memperkuat identitas brand, meningkatkan visibilitas online, serta mempermudah penyampaian informasi dan interaksi dengan komunitas.",
    tag: "Website",
    color: "from-[#0F2347] to-blue-800",
    logo: "/balimoon.png",
  },
  {
    name: "NWTC",
    description:
      "NWTC (National Winner Talent Competition) adalah ajang kompetisi akademik nasional berbasis digital oleh BTW Academy yang kami bantu melalui layanan social media management untuk meningkatkan awareness dan engagement.",
    tag: "Social Media Management",
    color: "from-[#0F2347] to-blue-800",
    logo: "/nwtc.png",
  },
];

const total = clients.length;

export default function Clients() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const [autoplay, setAutoplay] = useState(true);
  const animatingRef = useRef(false);
  const timerRef = useRef(null);

  const goTo = useCallback((index, dir = "next") => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    setDirection(dir);
    setAnimating(true);
    setCurrent((index + total) % total);
    setTimeout(() => {
      setAnimating(false);
      animatingRef.current = false;
    }, 400);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => {
      const nextIndex = (prev + 1) % total;
      goTo(nextIndex, "next");
      return prev; // actual update handled inside goTo
    });
  }, [goTo]);

  const prev = useCallback(() => {
    setCurrent((prev) => {
      const prevIndex = (prev - 1 + total) % total;
      goTo(prevIndex, "prev");
      return prev;
    });
  }, [goTo]);

  const pause = useCallback(() => {
    setAutoplay(false);
    clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % total;
        animatingRef.current = true;
        setDirection("next");
        setAnimating(true);
        setTimeout(() => {
          setAnimating(false);
          animatingRef.current = false;
        }, 400);
        return next;
      });
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, [autoplay]);

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .slide-enter-next { animation: slideInRight 0.4s ease forwards; }
        .slide-enter-prev { animation: slideInLeft  0.4s ease forwards; }
      `}</style>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Our Clients
          </h2>
        </div>
        <p className="text-center text-gray-500 mb-10 max-w-md mx-auto text-sm leading-relaxed">
          From simple ideas to complex digital transformations, we've helped our
          clients turn their vision into reality.
        </p>

        <div className="relative" onMouseEnter={pause}>
          <div className="overflow-hidden rounded-3xl">
            <div
              key={current}
              className={`bg-gradient-to-br ${clients[current].color} rounded-3xl p-8 md:p-12 flex flex-col gap-6
                ${animating ? (direction === "next" ? "slide-enter-next" : "slide-enter-prev") : ""}`}
              style={{ minHeight: "340px" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="bg-white/10 rounded-2xl p-3 backdrop-blur-sm">
                  <Image
                    src={clients[current].logo}
                    width={110}
                    height={44}
                    alt={clients[current].name + " logo"}
                    className="object-contain"
                  />
                </div>
                <span className="text-xs font-semibold px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white whitespace-nowrap backdrop-blur-sm">
                  {clients[current].tag}
                </span>
              </div>

              <h3 className="text-white font-black text-2xl md:text-3xl leading-tight">
                {clients[current].name}
              </h3>

              <p className="text-blue-200 text-sm md:text-base leading-relaxed flex-1">
                {clients[current].description}
              </p>

              <p className="text-white/40 text-xs font-mono self-end">
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              pause();
              goTo((current - 1 + total) % total, "prev");
            }}
            aria-label="Previous"
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 active:scale-95 transition-all duration-150 z-10 border border-gray-100"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M13 4L7 10L13 16"
                stroke="#1e293b"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={() => {
              pause();
              goTo((current + 1) % total, "next");
            }}
            aria-label="Next"
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 active:scale-95 transition-all duration-150 z-10 border border-gray-100"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M7 4L13 10L7 16"
                stroke="#1e293b"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {clients.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                pause();
                goTo(i, i > current ? "next" : "prev");
              }}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2.5 bg-blue-700"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

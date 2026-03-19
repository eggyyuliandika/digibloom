"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Apa saja layanan yang ditawarkan DigiBloom?",
    a: "DigiBloom menawarkan berbagai layanan digital meliputi Social Media Management, Website Development, Live Streaming Service, Creative Design, dan Creative Production. Kami siap membantu bisnis Anda tumbuh secara online dengan solusi yang tepat dan terukur.",
  },
  {
    q: "Berapa lama waktu pengerjaan untuk setiap proyek?",
    a: "Waktu pengerjaan bervariasi tergantung jenis layanan dan kompleksitas proyek. Untuk website biasanya membutuhkan 2–4 minggu, desain konten 3–7 hari kerja, dan social media management berjalan secara bulanan. Kami selalu mendiskusikan timeline secara transparan sebelum proyek dimulai.",
  },
  {
    q: "Apakah DigiBloom melayani klien di luar Bali?",
    a: "Ya! Meskipun kami berbasis di Bali, kami melayani klien dari seluruh Indonesia bahkan mancanegara. Semua proses komunikasi dan pengerjaan dapat dilakukan secara remote melalui online meeting, WhatsApp, dan platform kolaborasi lainnya.",
  },
  {
    q: "Bagaimana cara memulai kerja sama dengan DigiBloom?",
    a: 'Sangat mudah! Cukup isi form di bagian "Let\'s Create a Collaboration" atau hubungi kami langsung via WhatsApp. Tim kami akan menghubungi Anda dalam 1x24 jam untuk mendiskusikan kebutuhan, memberikan rekomendasi layanan, dan menyusun proposal yang sesuai dengan anggaran Anda.',
  },
  {
    q: "Apakah ada kontrak atau komitmen jangka panjang?",
    a: "Untuk layanan seperti Social Media Management, kami menawarkan paket bulanan yang fleksibel tanpa kontrak jangka panjang yang memaksa. Untuk proyek berbasis deliverable seperti website dan desain, kami bekerja dengan sistem project-based yang jelas scope dan harganya dari awal.",
  },
  {
    q: "Bagaimana sistem pembayaran di DigiBloom?",
    a: "Kami menggunakan sistem pembayaran bertahap yang adil. Umumnya 50% di awal sebagai tanda jadi, dan 50% setelah proyek selesai dan disetujui. Untuk layanan bulanan, pembayaran dilakukan di awal setiap bulan. Kami menerima transfer bank dan metode pembayaran digital lainnya.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Need to Know
          </h2>
          <p className="text-gray-500 mt-3 text-sm max-w-md mx-auto leading-relaxed">
            Pertanyaan yang sering ditanyakan seputar layanan dan cara kerja
            DigiBloom.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span className="font-semibold text-gray-800 text-sm pr-4">
                  {f.q}
                </span>
                <div
                  className="w-9 h-9 rounded-full bg-[#1B3A6B] flex items-center justify-center flex-shrink-0"
                  style={{
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M12 6v12M6 12h12"
                    />
                  </svg>
                </div>
              </button>

              <div
                style={{
                  maxHeight: open === i ? "200px" : "0px",
                  opacity: open === i ? 1 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.4s ease, opacity 0.3s ease",
                }}
              >
                <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

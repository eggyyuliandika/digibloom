"use client";
import { useState } from "react";

const services = [
  {
    title: "Social Media Management",
    description:
      "We plan, create, and manage engaging content to grow your brand's presence across social platforms.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
    illustration: (
      <svg
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect
          x="30"
          y="10"
          width="60"
          height="100"
          rx="10"
          fill="#1B3A6B"
          opacity="0.1"
        />
        <rect
          x="35"
          y="18"
          width="50"
          height="84"
          rx="6"
          fill="white"
          stroke="#1B3A6B"
          strokeWidth="1.5"
        />
        <rect x="40" y="26" width="40" height="22" rx="3" fill="#E8EEFF" />
        <circle cx="46" cy="32" r="3" fill="#1B3A6B" opacity="0.4" />
        <rect
          x="52"
          y="30"
          width="22"
          height="2.5"
          rx="1.5"
          fill="#1B3A6B"
          opacity="0.3"
        />
        <rect
          x="52"
          y="35"
          width="16"
          height="2.5"
          rx="1.5"
          fill="#1B3A6B"
          opacity="0.2"
        />
        <rect x="40" y="54" width="40" height="22" rx="3" fill="#FFF3E0" />
        <circle cx="46" cy="60" r="3" fill="#F5A623" opacity="0.6" />
        <rect
          x="52"
          y="58"
          width="22"
          height="2.5"
          rx="1.5"
          fill="#1B3A6B"
          opacity="0.3"
        />
        <rect
          x="52"
          y="63"
          width="16"
          height="2.5"
          rx="1.5"
          fill="#1B3A6B"
          opacity="0.2"
        />
        <circle cx="120" cy="35" r="12" fill="#F5A623" opacity="0.15" />
        <text x="120" y="40" textAnchor="middle" fontSize="12">
          ❤️
        </text>
        <circle cx="15" cy="70" r="9" fill="#E8EEFF" />
        <text x="15" y="75" textAnchor="middle" fontSize="9">
          💬
        </text>
      </svg>
    ),
  },
  {
    title: "Website Development",
    description:
      "From sleek company profiles to custom platforms, build websites that are functional, responsive, and user-friendly.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    illustration: (
      <svg
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect
          x="10"
          y="15"
          width="120"
          height="90"
          rx="8"
          fill="white"
          stroke="#1B3A6B"
          strokeWidth="1.5"
        />
        <rect
          x="10"
          y="15"
          width="120"
          height="22"
          rx="8"
          fill="#1B3A6B"
          opacity="0.08"
        />
        <circle cx="24" cy="26" r="3.5" fill="#FF5F57" />
        <circle cx="35" cy="26" r="3.5" fill="#FEBC2E" />
        <circle cx="46" cy="26" r="3.5" fill="#28C840" />
        <rect
          x="20"
          y="46"
          width="40"
          height="3.5"
          rx="2"
          fill="#1B3A6B"
          opacity="0.2"
        />
        <rect
          x="20"
          y="54"
          width="30"
          height="3.5"
          rx="2"
          fill="#F5A623"
          opacity="0.5"
        />
        <rect
          x="20"
          y="62"
          width="50"
          height="3.5"
          rx="2"
          fill="#1B3A6B"
          opacity="0.15"
        />
        <rect
          x="20"
          y="70"
          width="35"
          height="3.5"
          rx="2"
          fill="#F5A623"
          opacity="0.3"
        />
        <rect x="80" y="42" width="40" height="50" rx="5" fill="#E8EEFF" />
        <rect
          x="85"
          y="48"
          width="30"
          height="7"
          rx="3"
          fill="#1B3A6B"
          opacity="0.3"
        />
        <rect
          x="85"
          y="60"
          width="22"
          height="3"
          rx="2"
          fill="#1B3A6B"
          opacity="0.15"
        />
        <rect
          x="85"
          y="66"
          width="28"
          height="3"
          rx="2"
          fill="#1B3A6B"
          opacity="0.1"
        />
        <rect
          x="85"
          y="78"
          width="18"
          height="7"
          rx="3"
          fill="#1B3A6B"
          opacity="0.4"
        />
      </svg>
    ),
  },
  {
    title: "Live Streaming Service",
    description:
      "Professional live streaming setup and management for events, product launches, and virtual gatherings.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    illustration: (
      <svg
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect
          x="30"
          y="35"
          width="70"
          height="50"
          rx="7"
          fill="white"
          stroke="#1B3A6B"
          strokeWidth="1.5"
        />
        <circle
          cx="65"
          cy="60"
          r="17"
          fill="#E8EEFF"
          stroke="#1B3A6B"
          strokeWidth="1.5"
        />
        <circle cx="65" cy="60" r="10" fill="#1B3A6B" opacity="0.15" />
        <circle cx="65" cy="60" r="5" fill="#1B3A6B" opacity="0.4" />
        <rect
          x="95"
          y="40"
          width="12"
          height="9"
          rx="3"
          fill="#F5A623"
          opacity="0.6"
        />
        <rect x="34" y="41" width="16" height="10" rx="3" fill="#E8EEFF" />
        <rect x="45" y="18" width="40" height="16" rx="8" fill="#FF3B30" />
        <text
          x="65"
          y="30"
          textAnchor="middle"
          fontSize="9"
          fontWeight="bold"
          fill="white"
        >
          ● LIVE
        </text>
        <path
          d="M108 48 Q116 60 108 72"
          stroke="#1B3A6B"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M114 43 Q124 60 114 77"
          stroke="#1B3A6B"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.2"
        />
        <line
          x1="65"
          y1="85"
          x2="50"
          y2="108"
          stroke="#1B3A6B"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.3"
        />
        <line
          x1="65"
          y1="85"
          x2="65"
          y2="110"
          stroke="#1B3A6B"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.3"
        />
        <line
          x1="65"
          y1="85"
          x2="80"
          y2="108"
          stroke="#1B3A6B"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.3"
        />
      </svg>
    ),
  },
  {
    title: "Creative Design",
    description:
      "Eye-catching visuals that bring your brand identity to life, from logos to digital assets.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    illustration: (
      <svg
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect
          x="15"
          y="15"
          width="90"
          height="70"
          rx="8"
          fill="white"
          stroke="#1B3A6B"
          strokeWidth="1.5"
        />
        <circle cx="40" cy="38" r="12" fill="#E8EEFF" />
        <circle cx="40" cy="38" r="6" fill="#1B3A6B" opacity="0.3" />
        <polygon
          points="15,85 55,50 75,68 95,40 105,85"
          fill="#F5A623"
          opacity="0.2"
        />
        <polygon
          points="55,50 75,68 95,40 105,85 15,85"
          fill="#1B3A6B"
          opacity="0.1"
        />
        <circle
          cx="120"
          cy="40"
          r="20"
          fill="#F5A623"
          opacity="0.15"
          stroke="#F5A623"
          strokeWidth="1"
        />
        <path
          d="M112 40 L118 46 L128 34"
          stroke="#F5A623"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="108"
          y="70"
          width="24"
          height="4"
          rx="2"
          fill="#1B3A6B"
          opacity="0.2"
        />
        <rect
          x="112"
          y="78"
          width="16"
          height="4"
          rx="2"
          fill="#1B3A6B"
          opacity="0.15"
        />
      </svg>
    ),
  },
  {
    title: "Creative Production",
    description:
      "High quality photo and video content tailored to tell your brand's story in the most impactful way.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
        />
      </svg>
    ),
    illustration: (
      <svg
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect
          x="10"
          y="30"
          width="120"
          height="60"
          rx="7"
          fill="white"
          stroke="#1B3A6B"
          strokeWidth="1.5"
        />
        <rect
          x="18"
          y="23"
          width="12"
          height="9"
          rx="2.5"
          fill="#1B3A6B"
          opacity="0.2"
        />
        <rect
          x="36"
          y="23"
          width="12"
          height="9"
          rx="2.5"
          fill="#1B3A6B"
          opacity="0.2"
        />
        <rect
          x="54"
          y="23"
          width="12"
          height="9"
          rx="2.5"
          fill="#1B3A6B"
          opacity="0.2"
        />
        <rect
          x="72"
          y="23"
          width="12"
          height="9"
          rx="2.5"
          fill="#1B3A6B"
          opacity="0.2"
        />
        <rect
          x="90"
          y="23"
          width="12"
          height="9"
          rx="2.5"
          fill="#1B3A6B"
          opacity="0.2"
        />
        <rect
          x="108"
          y="23"
          width="12"
          height="9"
          rx="2.5"
          fill="#1B3A6B"
          opacity="0.2"
        />
        <rect
          x="18"
          y="88"
          width="12"
          height="9"
          rx="2.5"
          fill="#1B3A6B"
          opacity="0.2"
        />
        <rect
          x="36"
          y="88"
          width="12"
          height="9"
          rx="2.5"
          fill="#1B3A6B"
          opacity="0.2"
        />
        <rect
          x="54"
          y="88"
          width="12"
          height="9"
          rx="2.5"
          fill="#1B3A6B"
          opacity="0.2"
        />
        <rect
          x="72"
          y="88"
          width="12"
          height="9"
          rx="2.5"
          fill="#1B3A6B"
          opacity="0.2"
        />
        <rect
          x="90"
          y="88"
          width="12"
          height="9"
          rx="2.5"
          fill="#1B3A6B"
          opacity="0.2"
        />
        <rect
          x="108"
          y="88"
          width="12"
          height="9"
          rx="2.5"
          fill="#1B3A6B"
          opacity="0.2"
        />
        <rect x="18" y="37" width="30" height="46" rx="3" fill="#E8EEFF" />
        <rect x="55" y="37" width="30" height="46" rx="3" fill="#FFF3E0" />
        <rect x="92" y="37" width="30" height="46" rx="3" fill="#E8EEFF" />
        <circle cx="70" cy="60" r="13" fill="#1B3A6B" opacity="0.12" />
        <path d="M66 54 L66 66 L78 60 Z" fill="#1B3A6B" opacity="0.6" />
        <path
          d="M128 18 L130 12 L132 18 L138 20 L132 22 L130 28 L128 22 L122 20 Z"
          fill="#F5A623"
          opacity="0.8"
        />
      </svg>
    ),
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cardStyle = (isHovered) => ({
    minHeight: "200px",
    background: isHovered ? "#ffffff" : "#1B3A6B",
    border: isHovered ? "2px solid #f3f4f6" : "2px solid transparent",
    boxShadow: isHovered
      ? "0 25px 50px -12px rgba(0,0,0,0.25)"
      : "0 10px 15px -3px rgba(0,0,0,0.1)",
    transform: isHovered ? "translateY(-6px)" : "translateY(0)",
    transition:
      "background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
  });

  const renderCard = (service, index) => {
    const isHovered = hoveredIndex === index;
    return (
      <div
        key={index}
        className="relative rounded-3xl p-6 cursor-pointer overflow-hidden flex flex-col gap-3"
        style={cardStyle(isHovered)}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{
            background: isHovered ? "#E8EEFF" : "rgba(255,255,255,0.15)",
            color: isHovered ? "#1B3A6B" : "#ffffff",
            transition: "background 0.4s ease, color 0.4s ease",
          }}
        >
          {service.icon}
        </div>

        {/* Title */}
        <h3
          className="text-base font-bold leading-snug"
          style={{
            color: isHovered ? "#111827" : "#ffffff",
            transition: "color 0.4s ease",
          }}
        >
          {service.title}
        </h3>

        {/* Ilustrasi */}
        <div className="w-full h-28">{service.illustration}</div>

        {/* Deskripsi */}
        <div
          style={{
            maxHeight: isHovered ? "80px" : "0px",
            opacity: isHovered ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 0.4s ease, opacity 0.35s ease",
          }}
        >
          <p className="text-xs leading-relaxed text-gray-500">
            {service.description}
          </p>
        </div>

        <a
          href="#contact"
          className="font-semibold text-xs flex items-center gap-1.5 w-fit group mt-auto"
          style={{
            color: isHovered ? "#1B3A6B" : "#ffffff",
            transition: "color 0.4s ease",
          }}
        >
          Explore More
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1"
            style={{
              background: isHovered ? "#E8EEFF" : "rgba(255,255,255,0.2)",
              color: isHovered ? "#1B3A6B" : "#ffffff",
              transition: "background 0.4s ease, color 0.4s ease",
            }}
          >
            <svg
              className="w-2.5 h-2.5"
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
          </div>
        </a>

        {/* Lingkaran dekoratif */}
        <div
          className="absolute bottom-4 right-4 w-14 h-14 rounded-full pointer-events-none"
          style={{
            background: "rgba(255,255,255,0.05)",
            opacity: isHovered ? 0 : 1,
            transition: "opacity 0.4s ease",
          }}
        />
      </div>
    );
  };

  const firstRow = services.slice(0, 3);
  const secondRow = services.slice(3);

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Our Service
          </h2>
          <p className="text-gray-500 text-sm max-w-xs md:text-right leading-relaxed">
            Built to transform ideas into impactful experiences and measurable
            growth.
          </p>
        </div>

        {/* Baris 1 — 3 card penuh */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {firstRow.map((service, index) => renderCard(service, index))}
        </div>

        {/* Baris 2 — 2 card rata tengah */}
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          {secondRow.map((service, index) => (
            <div key={index + 3} className="w-full sm:w-[calc(33.333%-10px)]">
              {renderCard(service, index + 3)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

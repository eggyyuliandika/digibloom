"use client";
import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = () => {
    alert("Terima kasih! Kami akan segera menghubungi Anda.");
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#1B3A6B] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Left — text + ilustrasi */}
          <div className="flex-shrink-0 text-center md:text-left max-w-sm">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Let's Create
              <br />a Collaboration
            </h2>
            {/* Illustration */}
            {/* <Image src="/contact.png" width={900} height={100} alt="Logo" /> */}
          </div>

          {/* Right — form */}
          <div className="w-full md:w-[480px] bg-white rounded-3xl p-8 shadow-2xl flex-shrink-0">
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handle}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30 focus:border-[#1B3A6B] transition-all"
                  placeholder="Your name"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handle}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30 focus:border-[#1B3A6B] transition-all"
                    placeholder="+62..."
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                    E-mail
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handle}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30 focus:border-[#1B3A6B] transition-all"
                    placeholder="email@gmail.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handle}
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30 focus:border-[#1B3A6B] transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                onClick={submit}
                className="w-full bg-[#1B3A6B] text-white py-3.5 rounded-full font-bold text-sm hover:bg-[#0F2347] transition-all hover:shadow-lg mt-1"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

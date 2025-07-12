'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

export default function GdotNfcCard() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b1f16] via-[#091a13] to-black text-white px-6 py-8 font-sans">
      {/* Logo and Header */}
      <section className="flex flex-col items-center text-center" data-aos="fade-down">
        <div className="w-24 h-24 bg-gradient-to-tr from-green-700 to-green-900 rounded-full mb-4 shadow-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">Logo</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-wide text-green-300">GDOT International</h1>
        <p className="text-md text-gray-300 mt-1">Customized Non Woven Bags & More</p>
      </section>

      {/* Social Media Icons */}
      <section className="flex justify-center gap-4 text-xl mt-6" data-aos="fade-up">
        {[FaInstagram, FaFacebook, FaWhatsapp, FaLinkedin, FaTwitter].map((Icon, index) => (
          <div
            key={index}
            className="w-10 h-10 bg-green-800 hover:bg-green-700 transition duration-300 rounded-full flex items-center justify-center"
          >
            <Icon className="text-white" />
          </div>
        ))}
      </section>

      {/* Service Section */}
      <section className="mt-12 text-center" data-aos="fade-up">

        <p className="text-lg font-medium text-white">Customized Non Woven Bags</p>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-green-200">Sub Services</h3>
        <ul className="text-gray-200 space-y-2 text-base">
          <li className="bg-green-950 py-2 rounded-lg">Paper Straw</li>
          <li className="bg-green-950 py-2 rounded-lg">Tissue Paper</li>
          <li className="bg-green-950 py-2 rounded-lg">Paper Glass</li>
          <li className="bg-green-950 py-2 rounded-lg">Food Container</li>
          <li className="bg-green-950 py-2 rounded-lg">Paper Plate</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-500" data-aos="fade-up">
        <p className="mb-1">Powered by <span className="text-green-300 font-semibold">RanzomTech</span></p>
      </footer>
    </main>
  );
}

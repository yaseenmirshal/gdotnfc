'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaShareAlt,
  FaAddressCard,
  FaGlobe, // Website icon
} from 'react-icons/fa';

export default function GdotNfcCard() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const socialLinks = [
    {
      icon: FaInstagram,
      url: 'https://www.instagram.com/gdot_international?igsh=MTRzbmhmc3p5aGprdQ==',
      label: 'Instagram',
    },
  
    {
      icon: FaWhatsapp,
      url: 'https://wa.me/+919539509808',
      label: 'WhatsApp',
    },
    {
      icon: FaGlobe,
      url: 'https://www.gdotinternational.com',
      label: 'Website',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b1f16] via-[#091a13] to-black text-white px-4 py-5 font-sans">
      
      {/* Header */}
      <section className="flex flex-col items-center text-center" data-aos="fade-down">
        <div className="w-80 h-80 -mt-10 -mb-15 flex items-center justify-center"> {/* Increased size */}
          <img src="/G-DOT white hd.png" alt="GDOT Logo" className="w-full h-full object-contain" />
        </div>
        <p className="text-sm font-bold text-gray-300">Customized Non Woven Bags & More</p>
      </section>

      {/* Social Media Icons */}
      <section className="flex justify-center flex-wrap gap-4 text-3xl mt-6" data-aos="fade-up">
        {socialLinks.map(({ icon: Icon, url, label }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-12 h-12 bg-green-800 hover:bg-green-700 transition rounded-full flex items-center justify-center"
          >
            <Icon className="text-white" />
          </a>
        ))}
      </section>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6" data-aos="fade-up">
        {/* Share Button */}
        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: 'GDOT International',
                text: 'Check out GDOT International!',
                url: window.location.href,
              });
            } else {
              navigator.clipboard.writeText(window.location.href);
              alert('Link copied to clipboard!');
            }
          }}
          className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white text-green-800 border border-green-700 hover:bg-gray-100 transition"
        >
          <FaShareAlt />
          Share
        </button>

        {/* Save Contact Button */}
        <a
          href="/gdot-contact.vcf"
          download="G-DOT.vcf"
          className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white text-green-800 border border-green-700 hover:bg-gray-100 transition"
        >
          <FaAddressCard />
          Save Contact
        </a>
      </div>

      {/* Sub Services Section */}
      <section className="mt-12 text-center" data-aos="fade-up">
        <h3 className="text-xl font-semibold text-green-300 mb-4">Our Sub Services</h3>
        <ul className="grid gap-3 grid-cols-1 sm:grid-cols-2 max-w-md mx-auto text-sm">
          {[
            'Paper Straw',
            'Tissue Paper',
            'Paper Glass',
            'Food Container',
            'Paper Plate',
          ].map((item, idx) => (
            <li
              key={idx}
              className="bg-green-950 hover:bg-green-900 text-white py-2 rounded-md transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-gray-500" data-aos="fade-up">
        <a
          href="https://www.instagram.com/ranzomtech?igsh=OGV3MW4xZXdlaW5z"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="mb-1">
            Powered by{' '}
            <span className="text-green-300 font-semibold">RanzomTech</span>
          </p>
        </a>
      </footer>
    </main>
  );
}

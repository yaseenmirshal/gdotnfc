'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaInstagram,
  FaWhatsapp,
  FaShareAlt,
  FaAddressCard,
  FaGlobe,
  FaPhoneAlt,
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

  const teamMembers = [
    {
      name: 'ABBAS PP',
      designation: 'Founder, Chairman  Mentor',
      photo: '/abbas hd.png',
      phone: '+91919846623254',
      whatsapp: 'https://wa.me/+919846623254',
    },
    {
      name: 'IRSHAD MAAZANK',
      designation: 'CEO, Co-Founder & Head of Marketing',
      photo: '/irshad.png',
      phone: '+919946260777',
      whatsapp: 'https://wa.me/919946260777',
    },
    {
      name: 'MUHAMMED SIYAD',
      designation: 'COO & Head of Procurement',
      photo: '/siyad k.png',
      phone: '+919847909808',
      whatsapp: 'https://wa.me/919847909808',
    },
    {
      name: 'MUHAMMED BADSHA',
      designation: 'CCO, Co-Founder & Head of Sales',
      photo: 'https://t3.ftcdn.net/jpg/09/64/89/20/360_F_964892089_vioRltmAxaoQEBLtYtChVBxIzDWwhA3T.jpg',
      phone: '+919747038855',
      whatsapp: 'https://wa.me/919747038855',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b1f16] via-[#091a13] to-black text-white px-4 py-5 font-sans">
      {/* Header */}
      <section className="flex flex-col items-center text-center" data-aos="fade-down">
        <div className="w-80 h-80 -mt-10 -mb-15 flex items-center justify-center">
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
          href="/G-DOT.vcf"
          download="G-DOT.vcf"
          className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white text-green-800 border border-green-700 hover:bg-gray-100 transition"
        >
          <FaAddressCard />
          Save Contact
        </a>
      </div>

      {/* Our Team Section */}
      <section className="mt-12 text-center" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-green-300 mb-6">Our Team</h2>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-green-950 hover:bg-green-900 p-4 rounded-xl shadow-md transition flex flex-col items-center"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-24 h-24 object-cover rounded-full border-2 border-green-300 mb-3"
              />
              <h4 className="font-semibold text-white">{member.name}</h4>
              <p className="text-sm text-green-300">{member.designation}</p>
              <div className="flex gap-3 mt-3">
                <a
                  href={`tel:${member.phone}`}
                  className="w-10 h-10 bg-green-700 hover:bg-green-600 rounded-full flex items-center justify-center"
                >
                  <FaPhoneAlt className="text-white" />
                </a>
                <a
                  href={member.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-700 hover:bg-green-600 rounded-full flex items-center justify-center"
                >
                  <FaWhatsapp className="text-white text-2xl" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-gray-500" data-aos="fade-up">
        <a
          href="https://www.instagram.com/the.brandlee/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="mb-1">
            Powered by{' '}
            <span className="text-green-300 font-semibold">RanzomTech.</span>
          </p>
        </a>
      </footer>
    </main>
  );
}

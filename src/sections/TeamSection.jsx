import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Talha',
    role: 'Founder & CEO',
    image: '/team/talha.png',
    bio: 'Visionary behind OwlVest, building startup access for everyone.',
  },
  {
    name: 'Bilal',
    role: 'Co-Founder & CTO',
    image: '/team/bilal.png',
    bio: 'Leads product, engineering, and smart contract development.',
  },
];

const partners = [
  { logo: '/partners/google.png', name: 'Google for Startups' },
  { logo: '/partners/athena.png', name: 'Athena VC' },
  { logo: '/partners/i2i.png', name: 'i2i Ventures' },
  { logo: '/partners/hult.png', name: 'Hult Prize' },
];

export default function TeamSection() {
  return (
    <motion.section
      className="bg-gray-900 py-20 px-6 text-white text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-16"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="bg-gradient-to-r from-pink-500 via-blue-400 to-purple-500 text-transparent bg-clip-text animate-pulse">
          Meet the Team & Backers
        </span>
      </motion.h2>

      {/* 👨‍💼 Team Members */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-3xl w-full">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-blue-600 shadow-md"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-400 text-sm">{member.role}</p>
              <p className="mt-3 text-sm text-gray-300 max-w-xs">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🤝 Partnerships */}
      <div className="mt-24 mb-20">
        <motion.h3
          className="text-xl sm:text-2xl font-semibold text-gray-300 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Trusted by leading ecosystem partners
        </motion.h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center max-w-6xl mx-auto px-6">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              className="bg-white/5 p-4 rounded-xl flex items-center justify-center h-20 shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition duration-300"
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-10 object-contain transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

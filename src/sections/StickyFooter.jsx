import React from 'react';
import Countdown from 'react-countdown';
import { ConnectWallet } from '../components/WalletConnect';
import { motion } from 'framer-motion';

export default function StickyFooter() {
  const presaleEnd = new Date('2025-07-01T00:00:00Z');

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-0 w-full bg-gradient-to-br from-[#120026] via-[#1A0038] to-[#2D0A51] text-white border-t border-gray-800 z-50 shadow-[0_-2px_15px_rgba(0,0,0,0.5)]"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* OwlCoin Price */}
        <div className="text-sm sm:text-base text-blue-300 font-medium animate-pulse">
          <strong className="text-white">OwlCoin:</strong> $0.008
        </div>

        {/* Countdown */}
        <div className="text-sm sm:text-base text-blue-400 font-medium">
          <Countdown date={presaleEnd} />
        </div>

        {/* Buttons */}
        <div className="flex gap-2 items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="glow-button"
          >
            <ConnectWallet />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold text-white shadow-md hover:shadow-[0_0_12px_rgba(59,130,246,0.6)] transition"
            onClick={() =>
              document.getElementById('token-form')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Buy Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

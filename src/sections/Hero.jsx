import React, { useEffect } from 'react';
import Countdown from 'react-countdown';
import { ConnectWallet } from '../components/WalletConnect';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, scale: 1 });
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-black text-center px-6 pt-8 pb-20 overflow-hidden"
    >
      {/* Logo */}
      <img
        src="/logo.png"
        alt="OwlVest Logo"
        className="w-[250px] h-[460px] object-contain -mb-40 -mt-50 drop-shadow-[0_0_20px_rgba(173,216,230,0.4)]"
      />

      {/* Animated Heading */}
      <div className="text-4xl md:text-6xl font-bold max-w-3xl leading-snug text-center flex flex-col items-center justify-center full-color-glow">
        {/* Line 1 */}
        <motion.div className="flex flex-wrap justify-center">
          {'Invest in Startups, Not'.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              className={`inline-block ${char === ' ' ? 'w-2' : ''}`}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Line 2 */}
        <motion.div className="flex flex-wrap justify-center mt-2">
          {'Sh*tcoins'.split('').map((char, index) => (
            <motion.span
              key={index + 1000}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 25) * 0.12 }}
              className={`inline-block ${char === ' ' ? 'w-2' : ''}`}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* OwlCoin Price */}
      <motion.p
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={controls}
        transition={{ duration: 1.3, ease: 'easeOut', delay: 0.2 }}
        className="text-xl mt-4 text-blue-400 font-medium text-glow"
      >
        OwlCoin Fixed Price: $0.008
      </motion.p>

      {/* Countdown Timer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.4 }}
        className="mt-6 text-lg text-white text-glow"
      >
        <Countdown date={new Date('2025-07-01T00:00:00Z')} />
      </motion.div>

      {/* Wallet Connect Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.6 }}
        className="mt-8"
      >
        <ConnectWallet />
      </motion.div>

      {/* Buy Now Button */}
      <motion.button
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 1.6, ease: 'easeOut', delay: 0.8 }}
        onClick={() => document.getElementById('token-form')?.scrollIntoView({ behavior: 'smooth' })}
        className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 glow-button text-white rounded-full font-semibold shadow-lg transition-all duration-300"
      >
        Buy Now
      </motion.button>

      {/* Styles */}
     <style>
  {`
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }

    .shimmer-bg {
      background-image: linear-gradient(120deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.05) 100%);
      background-size: 200% 100%;
      animation: shimmer 3s infinite;
    }

    .text-glow {
      text-shadow: 0 0 6px rgba(200, 255, 255, 0.7), 0 0 10px rgba(180, 255, 255, 0.6), 0 0 20px rgba(160, 240, 255, 0.5);
    }

    @keyframes colorShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .full-color-glow {
      background: linear-gradient(
        270deg,
        #ffcccc, #ffe0cc, #ffffcc, #ccffcc, #ccffff,
        #cce5ff, #e0ccff, #ffccf2, #ffffff, #ffcccc
      );
      background-size: 3000% 300%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: colorShift 10s ease-in-out infinite;
      text-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
    }

    .glow-button {
      box-shadow: 0 0 10px rgba(150, 255, 255, 0.5), 0 0 15px rgba(150, 255, 255, 0.4), 0 0 25px rgba(150, 255, 255, 0.3);
    }

    .glow-button:hover {
      box-shadow: 0 0 14px rgba(150, 255, 255, 0.7), 0 0 20px rgba(150, 255, 255, 0.6), 0 0 30px rgba(150, 255, 255, 0.5);
    }
  `}
</style>

    </section>
  );
}

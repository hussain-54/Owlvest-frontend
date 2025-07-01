import React from 'react';

export default function ConnectWalletPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#120026] via-[#1A0038] to-[#2D0A51] text-white flex flex-col justify-center items-center px-6 py-20">
      <div className="max-w-md w-full bg-[#1B0E3F] border border-[#2F1C55] rounded-2xl shadow-lg p-8 text-center">
        
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-[#00F08F] tracking-wide glow-text">
          Connect Your Wallet
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
          Securely connect your crypto wallet to access Owlvest's presale, governance, and exclusive startup investing features.
        </p>

        {/* Connect Button */}
        <button
          className="w-full py-3 px-6 rounded-lg bg-[#00F08F] hover:bg-[#00e87e] text-black font-semibold transition duration-300 shadow-lg glow-button"
        >
          🚀 Connect Now
        </button>
      </div>

      {/* Decorative Text */}
      <p className="mt-8 text-xs text-gray-400 text-center">
        Owlvest respects your privacy and never stores private keys.
      </p>

      {/* Custom CSS */}
      <style>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(0, 255, 160, 0.6), 0 0 18px rgba(0, 255, 160, 0.4);
        }
        .glow-button {
          box-shadow: 0 0 8px rgba(0, 255, 160, 0.4), 0 0 14px rgba(0, 255, 160, 0.3);
        }
        .glow-button:hover {
          box-shadow: 0 0 12px rgba(0, 255, 160, 0.6), 0 0 18px rgba(0, 255, 160, 0.5);
        }
      `}</style>
    </div>
  );
}

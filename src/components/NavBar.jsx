import React from 'react';
import { ConnectWallet } from './WalletConnect'; // Adjust path if needed

export default function NavBar() {
  return (
    <nav className="w-full bg-gradient-to-r from-[#1F1A31] via-[#2A1842] to-[#46166C] text-white shadow-md fixed top-10 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide text-white">
          Owlvest
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><a href="#features" className="hover:text-green-400">Features</a></li>
          <li><a href="#tokenomics" className="hover:text-green-400">Tokenomics</a></li>
          <li><a href="#roadmap" className="hover:text-green-400">Roadmap</a></li>
          <li><a href="#team" className="hover:text-green-400">Team</a></li>
          <li><a href="#faq" className="hover:text-green-400">FAQ</a></li>
        </ul>

        {/* Connect Wallet Button */}
        <div className="ml-4">
          <ConnectWallet />
        </div>
      </div>
    </nav>
  );
}

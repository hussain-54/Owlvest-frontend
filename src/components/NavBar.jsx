import React, { useState } from 'react';
import { ConnectWallet } from './WalletConnect';
import { Menu, X } from 'lucide-react'; // Optional: install if not present

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-[#1F1A31] via-[#2A1842] to-[#46166C] text-white shadow-md fixed top-8 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide text-white">Owlvest</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><a href="#features" className="hover:text-green-400">Features</a></li>
          <li><a href="#tokenomics" className="hover:text-green-400">Tokenomics</a></li>
          <li><a href="#roadmap" className="hover:text-green-400">Roadmap</a></li>
          <li><a href="#team" className="hover:text-green-400">Team</a></li>
          <li><a href="#faq" className="hover:text-green-400">FAQ</a></li>
        </ul>

        {/* Wallet Connect (Hidden on Mobile) */}
        <div className="hidden md:block ml-4">
          <ConnectWallet />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-[#2A1842] space-y-3">
          <a href="#features" className="block text-sm hover:text-green-400">Features</a>
          <a href="#tokenomics" className="block text-sm hover:text-green-400">Tokenomics</a>
          <a href="#roadmap" className="block text-sm hover:text-green-400">Roadmap</a>
          <a href="#team" className="block text-sm hover:text-green-400">Team</a>
          <a href="#faq" className="block text-sm hover:text-green-400">FAQ</a>
          <div className="pt-4">
            <ConnectWallet />
          </div>
        </div>
      )}
    </nav>
  );
}

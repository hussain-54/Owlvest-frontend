import React, { useState } from 'react';
import { ConnectWallet } from './WalletConnect';
import { Menu, X } from 'lucide-react'; // Optional: install if not present
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Team', href: '#team' },
    { name: 'FAQ', href: '#faq' },
    { name: 'About Us', to: '/about-us' }, // Use 'to' for internal routing
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-[#1F1A31] via-[#2A1842] to-[#46166C] text-white shadow-md fixed top-8 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide text-white">
          <Link to="/">Owlvest</Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item, idx) =>
            item.to ? (
              <li key={idx}>
                <Link to={item.to} className="hover:text-green-400">
                  {item.name}
                </Link>
              </li>
            ) : (
              <li key={idx}>
                <a href={item.href} className="hover:text-green-400">
                  {item.name}
                </a>
              </li>
            )
          )}
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
          {navItems.map((item, idx) =>
            item.to ? (
              <Link key={idx} to={item.to} className="block text-sm hover:text-green-400" onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            ) : (
              <a key={idx} href={item.href} className="block text-sm hover:text-green-400" onClick={() => setIsOpen(false)}>
                {item.name}
              </a>
            )
          )}
          <div className="pt-4">
            <ConnectWallet />
          </div>
        </div>
      )}
    </nav>
  );
}

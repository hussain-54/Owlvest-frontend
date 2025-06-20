import React from 'react';

export const ConnectWallet = () => {
  return (
    <button
      className="px-5 py-2 bg-[#2FFB9C] text-gray-900 rounded-md font-medium hover:bg-gray-100 transition"
      onClick={() => alert('Connect wallet logic here')}
    >
      Connect Wallet
    </button>
  );
};

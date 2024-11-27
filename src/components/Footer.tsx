import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-cyan-500/20 py-6">
      <div className="max-w-4xl mx-auto px-4 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Anonymous Adarsha. All rights reserved.</p>
        <p className="mt-2 text-sm">Built by Arjan Chaudhary</p>
      </div>
    </footer>
  );
}
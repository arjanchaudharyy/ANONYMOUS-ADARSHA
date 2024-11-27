import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gray-900 border-b border-cyan-500/20 sticky top-0 z-40">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
            <Zap className="w-6 h-6 text-cyan-400" />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Anonymous Adarsha
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
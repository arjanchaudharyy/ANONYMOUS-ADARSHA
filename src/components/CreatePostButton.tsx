import React from 'react';
import { PenSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CreatePostButtonProps {
  onClick: () => void;
  className?: string;
}

export function CreatePostButton({ onClick, className }: CreatePostButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full bg-gray-800 hover:bg-gray-700 rounded-lg p-4 flex items-center gap-3 text-gray-400 hover:text-gray-300 transition-colors',
        className
      )}
    >
      <PenSquare className="w-5 h-5" />
      <span>What's on your mind?</span>
    </button>
  );
}
import React from 'react';
import { X } from 'lucide-react';
import { PostForm } from './PostForm';

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPost: (content: string, imageUrl?: string) => void;
}

export function PostModal({ isOpen, onClose, onPost }: PostModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-xl w-full max-w-lg shadow-xl">
        <div className="border-b border-gray-800 p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">Create Post</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4">
          <PostForm onSubmit={onPost} onCancel={onClose} />
        </div>
      </div>
    </div>
  );
}
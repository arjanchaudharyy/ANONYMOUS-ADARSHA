import React, { useState } from 'react';
import { Button } from './ui/Button';
import { ImagePlus } from 'lucide-react';

interface PostFormProps {
  onSubmit: (content: string, imageUrl?: string) => void;
  onCancel?: () => void;
}

export function PostForm({ onSubmit, onCancel }: PostFormProps) {
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(content, imageUrl);
    setContent('');
    setImageUrl('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-32 text-gray-100 placeholder-gray-500"
          maxLength={500}
        />
        <div className="text-sm text-gray-500 text-right">
          {content.length}/500 characters
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300">Image URL (optional)</label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="flex-1 rounded-lg bg-gray-800 border border-gray-700 p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100 placeholder-gray-500"
          />
        </div>
      </div>

      <div className="flex gap-3 justify-end">
        {onCancel && (
          <Button
            type="button"
            variant="secondary"
            onClick={onCancel}
            className="bg-gray-800 text-gray-300 hover:bg-gray-700"
          >
            Cancel
          </Button>
        )}
        <Button
          type="submit"
          disabled={!content.trim()}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Post
        </Button>
      </div>
    </form>
  );
}
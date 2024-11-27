import React from 'react';
import { SortOption } from '@/types';
import { Button } from './ui/Button';
import { ArrowDownAZ, ArrowUpAZ, ThumbsUp, ThumbsDown } from 'lucide-react';

interface SortControlsProps {
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export function SortControls({ currentSort, onSortChange }: SortControlsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Button
        size="sm"
        variant={currentSort === 'newest' ? 'primary' : 'secondary'}
        onClick={() => onSortChange('newest')}
        className="flex items-center gap-1"
      >
        <ArrowDownAZ className="w-4 h-4" />
        Newest
      </Button>
      <Button
        size="sm"
        variant={currentSort === 'oldest' ? 'primary' : 'secondary'}
        onClick={() => onSortChange('oldest')}
        className="flex items-center gap-1"
      >
        <ArrowUpAZ className="w-4 h-4" />
        Oldest
      </Button>
      <Button
        size="sm"
        variant={currentSort === 'mostLiked' ? 'primary' : 'secondary'}
        onClick={() => onSortChange('mostLiked')}
        className="flex items-center gap-1"
      >
        <ThumbsUp className="w-4 h-4" />
        Most Liked
      </Button>
      <Button
        size="sm"
        variant={currentSort === 'mostDisliked' ? 'primary' : 'secondary'}
        onClick={() => onSortChange('mostDisliked')}
        className="flex items-center gap-1"
      >
        <ThumbsDown className="w-4 h-4" />
        Most Disliked
      </Button>
    </div>
  );
}
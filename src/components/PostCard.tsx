import React, { useState } from 'react';
import { type Post } from '@/types';
import { formatDistanceToNow } from 'date-fns';
import { MessageSquare, ThumbsUp, ThumbsDown, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CommentSection } from './CommentSection';

interface PostCardProps {
  post: Post;
  currentUserKey: string;
  onLike: (id: string) => void;
  onDislike: (id: string) => void;
  onComment: (id: string, content: string) => void;
  onDelete?: (id: string) => void;
  isAdmin?: boolean;
}

export function PostCard({
  post,
  currentUserKey,
  onLike,
  onDislike,
  onComment,
  onDelete,
  isAdmin
}: PostCardProps) {
  const [showComments, setShowComments] = useState(false);
  const hasLiked = post.likes.includes(currentUserKey);
  const hasDisliked = post.dislikes.includes(currentUserKey);

  return (
    <div className="bg-gray-900 rounded-xl shadow-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-colors animate-glow">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-gray-100 text-lg whitespace-pre-wrap">{post.content}</p>
            {post.imageUrl && (
              <img
                src={post.imageUrl}
                alt="Post attachment"
                className="mt-4 rounded-lg max-h-96 w-full object-cover"
              />
            )}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-gray-500">
                {formatDistanceToNow(post.createdAt, { addSuffix: true })}
              </span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => onLike(post.id)}
                  className={cn(
                    "flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors",
                    hasLiked && "text-cyan-400"
                  )}
                >
                  <ThumbsUp className="w-5 h-5" />
                  <span className="text-sm">{post.likes.length}</span>
                </button>
                <button
                  onClick={() => onDislike(post.id)}
                  className={cn(
                    "flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors",
                    hasDisliked && "text-red-400"
                  )}
                >
                  <ThumbsDown className="w-5 h-5" />
                  <span className="text-sm">{post.dislikes.length}</span>
                </button>
                <button
                  onClick={() => setShowComments(!showComments)}
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-sm">{post.comments.length}</span>
                  {showComments ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {(isAdmin || currentUserKey === post.userKey) && (
                  <button
                    onClick={() => onDelete?.(post.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
            
            {showComments && (
              <CommentSection
                comments={post.comments}
                onAddComment={(content) => onComment(post.id, content)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { CreatePostButton } from '@/components/CreatePostButton';
import { PostModal } from '@/components/PostModal';
import { PostCard } from '@/components/PostCard';
import { SortControls } from '@/components/SortControls';
import { getPosts, createPost, toggleLike, toggleDislike, addComment } from '@/lib/storage';
import type { Post, SortOption } from '@/types';

export function HomePage() {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  const [userKey] = useState(() => localStorage.getItem('userKey') || crypto.randomUUID());

  useEffect(() => {
    localStorage.setItem('userKey', userKey);
    setPosts(getPosts());
  }, [userKey]);

  const sortedPosts = [...posts].sort((a, b) => {
    switch (sortOption) {
      case 'newest':
        return b.createdAt - a.createdAt;
      case 'oldest':
        return a.createdAt - b.createdAt;
      case 'mostLiked':
        return b.likes.length - a.likes.length;
      case 'mostDisliked':
        return b.dislikes.length - a.dislikes.length;
      default:
        return 0;
    }
  });

  const handlePost = (content: string, imageUrl?: string) => {
    createPost(content, imageUrl, userKey);
    setPosts(getPosts());
    setIsPostModalOpen(false);
  };

  const handleLike = (postId: string) => {
    toggleLike(postId, userKey);
    setPosts(getPosts());
  };

  const handleDislike = (postId: string) => {
    toggleDislike(postId, userKey);
    setPosts(getPosts());
  };

  const handleComment = (postId: string, content: string) => {
    addComment(postId, content, userKey);
    setPosts(getPosts());
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="space-y-6">
        <CreatePostButton
          onClick={() => setIsPostModalOpen(true)}
          className="mb-6"
        />

        <SortControls
          currentSort={sortOption}
          onSortChange={setSortOption}
        />

        {sortedPosts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            currentUserKey={userKey}
            onLike={handleLike}
            onDislike={handleDislike}
            onComment={handleComment}
          />
        ))}

        {posts.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No posts yet. Be the first to post something!
          </div>
        )}
      </div>

      <PostModal
        isOpen={isPostModalOpen}
        onClose={() => setIsPostModalOpen(false)}
        onPost={handlePost}
      />
    </div>
  );
}
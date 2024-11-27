import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPosts, deletePost } from '@/lib/storage';
import { PostCard } from '@/components/PostCard';
import type { Post } from '@/types';

export function AdminDashboardPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  const handleDelete = (postId: string) => {
    deletePost(postId);
    setPosts(getPosts());
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={() => navigate('/')}
          className="text-sm text-gray-400 hover:text-gray-300"
        >
          Back to Home
        </button>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            currentUserKey="admin"
            isAdmin
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
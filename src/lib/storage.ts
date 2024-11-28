import { Post, Comment } from '@/types';

const POSTS_KEY = 'anonymous_adarsha_posts';
const ADMIN_CREDENTIALS = {
  username: 'arnav goswami',
  password: 'ronaldo is op 17' // In a real app, this would be properly hashed and stored securely
};

export function getPosts(): Post[] {
  const posts = localStorage.getItem(POSTS_KEY);
  return posts ? JSON.parse(posts) : [];
}

export function savePosts(posts: Post[]) {
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
}

export function createPost(content: string, imageUrl: string | undefined, userKey: string): Post {
  const posts = getPosts();
  const newPost: Post = {
    id: crypto.randomUUID(),
    content,
    imageUrl,
    likes: [],
    dislikes: [],
    comments: [],
    createdAt: Date.now(),
    userKey
  };
  
  savePosts([newPost, ...posts]);
  return newPost;
}

export function deletePost(postId: string) {
  const posts = getPosts().filter(post => post.id !== postId);
  savePosts(posts);
}

export function toggleLike(postId: string, userKey: string) {
  const posts = getPosts();
  const post = posts.find(p => p.id === postId);
  
  if (post) {
    const hasLiked = post.likes.includes(userKey);
    const hasDisliked = post.dislikes.includes(userKey);

    if (hasLiked) {
      post.likes = post.likes.filter(key => key !== userKey);
    } else {
      if (hasDisliked) {
        post.dislikes = post.dislikes.filter(key => key !== userKey);
      }
      post.likes.push(userKey);
    }
    
    savePosts(posts);
  }
}

export function toggleDislike(postId: string, userKey: string) {
  const posts = getPosts();
  const post = posts.find(p => p.id === postId);
  
  if (post) {
    const hasLiked = post.likes.includes(userKey);
    const hasDisliked = post.dislikes.includes(userKey);

    if (hasDisliked) {
      post.dislikes = post.dislikes.filter(key => key !== userKey);
    } else {
      if (hasLiked) {
        post.likes = post.likes.filter(key => key !== userKey);
      }
      post.dislikes.push(userKey);
    }
    
    savePosts(posts);
  }
}

export function addComment(postId: string, content: string, userKey: string) {
  const posts = getPosts();
  const post = posts.find(p => p.id === postId);
  
  if (post) {
    const newComment: Comment = {
      id: crypto.randomUUID(),
      content,
      createdAt: Date.now(),
      userKey
    };
    
    post.comments.push(newComment);
    savePosts(posts);
    return newComment;
  }
}

export function validateAdmin(username: string, password: string): boolean {
  return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password;
}
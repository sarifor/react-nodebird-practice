// React 불러오기
// - Next.js에선 필요없음
// - 제로초님은 그냥 습관적으로 적어줌
import React from 'react';

import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

import { useSelector } from 'react-redux';

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post) => <PostCard key={post.id} post={post.content} />)}
    </AppLayout>
  )
}

export default Home;
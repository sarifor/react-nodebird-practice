// React 불러오기
// - Next.js에선 필요없음
// - 제로초님은 그냥 습관적으로 적어줌
import React from 'react';

import AppLayout from "../components/AppLayout";
import { PostForm, PostCard } from "../components/Post";

import { useSelector } from 'react-redux';

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  // 컴포넌트 렌더링
  // - map 함수로 반복되는 컴포넌트 렌더링
  // - 배열 내 각 요소를 원하는 규칙에 따라 변환한 후, 그 결과로 새로운 요소를 반환
  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
    </AppLayout>
  )
}

export default Home;
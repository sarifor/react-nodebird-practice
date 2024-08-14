// React 불러오기
// - Next.js에선 필요없음
// - 제로초님은 그냥 습관적으로 적어줌
import React from 'react';

import AppLayout from "../components/AppLayout";
import { PostForm, PostCard } from "../components/Post";

import { createGlobalStyle } from 'styled-components';

import { useSelector } from 'react-redux';

// 모든 Ant Desgin 버튼의 글자색을 파랑으로 변경
// - Q. 함수 컴포넌트 밖에 둬도 되나?
const Global = createGlobalStyle`
  .ant-btn {
    color: blue;
  }
`;

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  // 컴포넌트 렌더링
  // - map 함수로 반복되는 컴포넌트 렌더링
  // - 배열 내 각 요소를 원하는 규칙에 따라 변환한 후, 그 결과로 새로운 요소를 반환
  return (
    <div>
      <Global />
      <AppLayout>
        {isLoggedIn && <PostForm />}
        {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
      </AppLayout>
    </div>
  )
}

export default Home;
// React 불러오기
// - Next.js에선 필요없음
// - 제로초님은 그냥 습관적으로 적어줌
import React, { useEffect } from 'react';

import AppLayout from "../components/AppLayout";
import { PostForm, PostCard } from "../components/Post";

import { createGlobalStyle } from 'styled-components';

// 리덕스 관련
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_POSTS_REQUEST } from '../reducers/post';

// 모든 Ant Desgin 버튼의 글자색을 파랑으로 변경
// - Q. 함수 컴포넌트 밖에 둬도 되나?
const Global = createGlobalStyle`
  .ant-btn {
    color: blue;
  }
`;

// Home 컴포넌트
// - Q. useEffect에서 generateDummyPost()를 직접 호출하기보단 액션을 디스패치하는 게 리덕스 상태 관리 패턴에 맞다고 함. 상세?
const Home = () => {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.user);
  const { isAddPostToMeError } = useSelector((state) => state.user);
  const { isLatestPostDeletedError } = useSelector((state) => state.post);
  const { mainPosts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    })
  });

  return (
    <div>
      <Global />
      <AppLayout>
        {isLoggedIn && <PostForm />}
        {isAddPostToMeError && isLatestPostDeletedError && <div>Problem occured when uploading post. Please try again!</div>}
        {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
      </AppLayout>
    </div>
  )
}

export default Home;
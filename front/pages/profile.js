import React from 'react';
import Head from 'next/head';
import AppLayout from "../components/AppLayout";
import OtherLayout from '../components/OtherLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import UserList from '../components/UserList';

import { useSelector } from 'react-redux';

// Profile 컴포넌트
// - 삼항 연산자: 두 가지 선택이 필요할 때 사용
// - CF) 논리 연산자 &&: 특정 조건이 참일 때만 실행하는 경우에 사용
// - Q. user 상태 불러올 때, if (userInfo) { const Followings = userInfo.Followings } 에러 나는 이유?
const Profile = () => {
  const loggedInUser = useSelector((state) => state.user);
  const isLoggedIn = loggedInUser.isLoggedIn;
  const userInfo = loggedInUser.userInfo;
  const Followings = userInfo?.Followings;
  const Followers = userInfo?.Followers;

  return (
    <>
      <Head>
        <title>Profile Page</title>
      </Head>
      <AppLayout>
        <OtherLayout>
          {isLoggedIn
          ? (<>
              <NicknameEditForm />
              <UserList header="Following List" data={Followings} />
              <UserList header="Follower List" data={Followers} />
            </>)
          : (<div>Please log in!</div>)}
        </OtherLayout>
      </AppLayout>
    </>
  )
}

export default Profile;
import React from 'react';
import Head from 'next/head';
import AppLayout from "../components/AppLayout";
import OtherLayout from '../components/OtherLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import UserList from '../components/UserList';

import { useSelector } from 'react-redux';


const Profile = () => {
  const { isLoggedIn } = useSelector((state) => state.user);

  const followingList = [
    {
      nickname: 'Jenny',
      description: 'Cat face'
    },
    {
      nickname: 'Haerin',
      description: 'New Cat face'
    },
    {
      nickname: 'Minji',
      description: 'Puppy face'
    },
    {
      nickname: 'Hanni',
      description: 'Fresh face'
    },
    {
      nickname: 'Hyein',
      description: 'Hiphop face'
    },
    {
      nickname: 'Bunny',
      description: 'Cute face'
    },        
  ];

  const followerList = [
    {
      nickname: 'Ikko',
      description: '1111'
    },
    {
      nickname: 'Niko',
      description: '2222'
    },
    {
      nickname: 'Miko',
      description: '333'
    },
    {
      nickname: 'Yoko',
      description: '4444'
    },
    {
      nickname: 'Itsuko',
      description: '55555'
    },
    {
      nickname: 'Mutta',
      description: '666666'
    },
    {
      nickname: 'Nana',
      description: '7777777'
    },
    {
      nickname: 'Yao',
      description: '88888888'
    },             
  ];

  // 컴포넌트 렌더링
  // - 삼항 연산자: 두 가지 선택이 필요할 때 사용
  // - CF) 논리 연산자 &&: 특정 조건이 참일 때만 실행하는 경우에 사용
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
              <UserList header="Following List" data={followingList} />
              <UserList header="Follower List" data={followerList} />
            </>)
          : (<div>Please log in!</div>)}
        </OtherLayout>
      </AppLayout>
    </>
  )
}

export default Profile;
import React from 'react';
import Head from 'next/head';
import AppLayout from "../components/AppLayout";
import OtherLayout from '../components/OtherLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import UserList from '../components/UserList';

const Profile = () => {
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

  return (
    <>
      <Head>
        <title>Profile Page</title>
      </Head>
      <AppLayout>
        <OtherLayout>
          {/* Q. 로그아웃 중일 땐 안 보이게 하는 법? */}
          <NicknameEditForm />
          <UserList header="Following List" data={followingList} />
          <UserList header="Follower List" data={followerList} />
        </OtherLayout>
      </AppLayout>
    </>
  )
}

export default Profile;
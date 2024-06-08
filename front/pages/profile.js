import React from 'react';
import Head from 'next/head';
import AppLayout from "../components/AppLayout";
import OtherLayout from '../components/OtherLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import UserList from '../components/UserList';

const Profile = () => {
  const followingList = [
    {
      title: 'Jenny',
      description: 'Cat face'
    },
    {
      title: 'Haerin',
      description: 'New Cat face'
    },
  ];

  const followerList = [
    {
      title: 'Ikko',
      description: '1111'
    },
    {
      title: 'Niko',
      description: '2222'
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
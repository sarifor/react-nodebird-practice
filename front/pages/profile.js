import Head from 'next/head';
import AppLayout from "../components/AppLayout";
import OtherLayout from '../components/OtherLayout';

const Profile = () => {
  return (
    <>
      <Head>
        <title>Profile Page</title>
      </Head>
      <AppLayout>
        <OtherLayout>
          <div>Profile</div>
        </OtherLayout>
      </AppLayout>
    </>
  )
}

export default Profile;
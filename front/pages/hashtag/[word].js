import React from 'react';
import AppLayout from '../../components/AppLayout';
import { useRouter } from 'next/router';

// Path parameter로 받은 해시태그를 화면에 보여주기
// - 해당 해시태그를 사용하는 포스트 보여주기로 변경 예정
const Word = () => {
  const router = useRouter();
  return (
    <AppLayout>
      <div>
        You clciked hashtag {router.query.word}.<br />
        Posts with {router.query.word} are as below.

        {/* Post list */}
      </div>
    </AppLayout>
  )
}

export default Word;
import React from 'react';
import { useRouter } from 'next/router';

// Path parameter로 받은 해시태그를 화면에 보여줌
// - 해당 해시태그를 사용하는 포스트 보여주기로 변경 예정
export default function Word() {
  const router = useRouter();
  return <div>You selected hashtag {router.query.word}</div>
}
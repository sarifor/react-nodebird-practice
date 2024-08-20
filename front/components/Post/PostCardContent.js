import React from "react";
import Link from "next/link";
import PropTypes from 'prop-types';

// 해시태그에 링크 걸기
// - 게시글에서 1개 이상 연속되는 공백 기준으로 단어 단위로 쪼개놓고,
// - #로 시작하는 1개 이상 연속되는 문자열에 링크 걺
// - 끝에 쿼리스트링을 붙임으로, 해시태그를 클릭하여 페이지에 도달함을 나타냄
// - CF: https://x.com/hashtag/NewJeans?src=hashtag_click
// - Q. An <a> element is no longer required as a child of <Link> (from Next.js v13) -> 진짜 그런가 실험해보자
const PostCardContent = ({ postData }) => {
  const dividedPostData = postData.split(/(\s+)/).map((word, index) => {
    if (word.match(/#[\w]+/)) {
      const wordWithoutHash = word.substring(1);      
      return <Link key={index} href={`/hashtag/${wordWithoutHash}?src=hashtag_click`}><a>{word}</a></Link>
    }

    return word;
  })

  return (
    <div>
      {dividedPostData}
    </div>
  )
}

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
}

export default PostCardContent;
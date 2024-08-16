import React from "react";
import Link from "next/link";
import PropTypes from 'prop-types';

// 해시태그에 링크 걸기
// - 포스트를 단어 단위로 쪼개놓고, #로 시작하는 단어에 링크 걺
// - 끝에 쿼리스트링을 붙임으로, 해시태그를 클릭하여 페이지에 도달함을 나타냄
// - CF: https://x.com/hashtag/NewJeans?src=hashtag_click
const PostCardContent = ({ postData }) => {
  const dividedPostData = postData.split(/(\s+)/).map((word, index) => {
    if (word.startsWith('#')) {
      const wordWithoutHash = word.substring(1);      
      return <Link key={index} href={`/hashtag/${wordWithoutHash}?src=hashtag_click`}>{word}</Link>
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
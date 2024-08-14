// # styled-components
// - 자바스크립트 파일 하나에 스타일까지 작성할 수 있게 해줌
// - 'styled.태그명'으로 스타일링된 엘리먼트 구현

import styled from 'styled-components';

const Omiyage = styled.div`
  padding: 10px;
`;

const Cake = styled.button`
  color: pink;
`;

const Jelly = styled.div`
  color: green;
`;

// 예시: 분홍색 케이크와 초록색 젤리
const DeliveryBox = () => {
  return (
    <Omiyage>
      <Cake>Ginza Cake</Cake>
      <Jelly>Hokkaido Jelly</Jelly>
    </Omiyage>
  )
};

export default DeliveryBox;
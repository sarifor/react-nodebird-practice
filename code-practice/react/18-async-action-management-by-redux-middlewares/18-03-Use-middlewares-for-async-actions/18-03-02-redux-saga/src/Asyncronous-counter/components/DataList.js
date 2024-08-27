import React from 'react';

// 데이터 또는 에러 출력
// - data 자체가 존재하는지 확인한 후, 
// - data.text 유무에 따라 다른 결과 출력
const DataList = ({ data, error }) => {
  return (
    <div>
      {data && data.text? data.text : error}
    </div>
  )
};

export default DataList;
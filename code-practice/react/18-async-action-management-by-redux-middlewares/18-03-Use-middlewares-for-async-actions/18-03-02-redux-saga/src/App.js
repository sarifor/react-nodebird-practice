import React from 'react';
import DataContainer from './Asyncronous-counter/components/DataContainer';

function App() {
  return (
    <div>
      <h2>API 요청으로 치바현 날씨 데이터 가져오기</h2>
      <DataContainer />
    </div>
  );
}

export default App;

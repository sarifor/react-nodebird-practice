import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataList from '../components/DataList';

// DataContainer 컴포넌트
// - 데이터를 비동기로 받아와서 
// - 리덕스를 통해 상태를 업데이트하고
// - 자식 컴포넌트인 DataList에 전달
const DataContainer = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
  }, [dispatch]);

  return <DataList data={data} error={error} />;
}

export default DataContainer;
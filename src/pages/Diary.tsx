import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';
import useDiary from '../hooks/useDiary';
import { getStringedDate } from '../utils/get-stringed-date';
import usePageTitle from '../hooks/usePageTitle';

const Diary = () => {
  const params = useParams();
  usePageTitle(`${params.id}번 일기`)
  const nav = useNavigate();
  const curDiaryItem = useDiary({ id: Number(params.id) || 0 });

  if(!curDiaryItem) {
    return <div>데이터 로딩중...!</div>;
  }

  const { createDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createDate));

  return (
    <div>
      <Header 
        title={`${title} 기록`} 
        leftChild={<Button onClick={() => nav(-1)} 
        text="< 뒤로 가기" />} 
        rightChild={<Button onClick={() => nav(`/edit/${params.id}`)} text="수정하기" />} 
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  )
}

export default Diary
import React from 'react'
import { getEmotionImage } from '../utils/get-emotion-image'
import Button from './Button'
import './DiaryItem.css';
import { useNavigate } from 'react-router-dom';
import { Data } from '../dataType';

interface DiaryItemProps extends Data{}

const DiaryItem: React.FC<DiaryItemProps> = ({ id, emotionId, createDate, content }) => {
  const nav = useNavigate();
  return (
    <div className='DiaryItem'>
      <div onClick={()=>nav(`diary/${id}`)}
      className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} alt='감정 이미지'/>
      </div>
      <div onClick={()=>nav(`diary/${id}`)} className='info_section'>
        <div className='created_date'>
          {new Date(createDate).toLocaleDateString()}
        </div>
        <div className='content'>{content}</div>
      </div>
      <div className='button_section'>
        <Button onClick={()=>nav(`/edit/${id}`)} text={"수정하기"} type={"DEFAULT"} />
      </div>
    </div>
  )
}

export default DiaryItem
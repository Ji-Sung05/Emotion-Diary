import React from 'react';
import './EmotionItem.css';
import { getEmotionImage } from '../utils/get-emotion-image';

interface EmotionItemProps {
  emotionId: number;
  emotionName?: string;
  isSelected?: boolean;
  onClick?: ()=>void;
}

export const EmotionItem: React.FC<EmotionItemProps> = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""}`} onClick={onClick}>
      <img className='emotion_img' src={getEmotionImage(emotionId)} alt="감정 이미지" />
      <div className='emotion_name'>{emotionName}</div>
    </div>
  );
};
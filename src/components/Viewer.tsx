import React from 'react'
import './Viewer.css'
import { getEmotionImage } from '../utils/get-emotion-image';
import { emotionList } from '../utils/constants';

interface ViewerProps {
  emotionId: number;
  content: string;
}

const Viewer: React.FC<ViewerProps> = ({ emotionId, content}) => {
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  );
  return (
    <div className='Viewer'>
      <section className='img_section'>
        <h4>오늘의 감정</h4>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
          <img src={getEmotionImage(emotionId)} alt="감정 이미지" />
          <div>
            {emotionItem?.emotionName}
          </div>
        </div>
      </section>
      <section className='content_section'>
        <h4>오늘의 일기</h4>
        <div className='content_wrapper'>
          <p>{content}</p>
        </div>
      </section>
    </div>
  )
}

export default Viewer
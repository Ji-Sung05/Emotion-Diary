import React, { useState, ChangeEvent, useEffect } from 'react';
import './Editor.css';
import { EmotionItem } from './EmotionItem';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { emotionList } from '../utils/constants';
import { EditorState } from '../dataType';
import { Data } from '../dataType';
import { getStringedDate } from '../utils/get-stringed-date';

interface EditorProps {
  onSubmit: (input: EditorState) => void;
  initData?: Data;
}

const Editor: React.FC<EditorProps> = ({ onSubmit, initData }) => {
  const nav = useNavigate();
  const [input, setInput] = useState<EditorState>({
    createDate: new Date(),
    emotionId: 3,
    content: "",
  });

  useEffect(()=>{
    if(initData) {
      setInput({
        ...initData,
        createDate: new Date(Number(initData.createDate))
      })
    }
  }, [initData])

  const onChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let name = e.target.name;
    let value: number | string | Date = e.target.value;

    if(name === 'createDate') {
      value = new Date(value);
    } else if (name === 'emotionId') {
      value = +value;
    }
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date-section">
        <h4>오늘의 날짜</h4>
        <input
          name="createDate"
          type="date"
          value={getStringedDate(input.createDate)}
          onChange={onChangeInput}
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: String(item.emotionId),
                  },
                } as ChangeEvent<HTMLInputElement>)
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          placeholder="오늘은 어땠나요?"
          name="content"
          value={input.content}
          onChange={onChangeInput}
        />
      </section>
      <section className="button_section">
        <Button onClick={() => nav(-1)} text="취소하기" />
        <Button onClick={onClickSubmitButton} text="작성완료" type={'POSITIVE'} />
      </section>
    </div>
  );
};

export default Editor;

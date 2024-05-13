import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';
import useDiary from '../hooks/useDiary';
import { Data, EditorState } from '../dataType';
import usePageTitle from './../hooks/usePageTitle';

interface EditProps {
  onSubmit?: (input: Data) => void;
}

const Edit: React.FC<EditProps> = () => {
  const params = useParams();
  usePageTitle(`${params.id}번 일기 수정`);
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const curDiaryItem = useDiary({ id: Number(params.id) || 0 });

  if(!curDiaryItem) {
    return <div>데이터 로딩중...!</div>;
  }

  const onClickDelete = () => {
    if (window.confirm('일기를 정말 삭제할까요?')) {
      onDelete(params.id);
      nav('/', { replace: true });
    }
  };

  const onSubmit = (input: EditorState) => {
    if(window.confirm("일기를 정말 수정할까요?")){
      onUpdate(
        params.id, 
        new Date(input.createDate).getTime(), 
        input.emotionId, 
        input.content
      );
      nav("/", { replace: true });
    }
  }

  return (
    <div>
      <Header
        title="일기 수정하기"
        leftChild={<Button onClick={() => nav(-1)} text="뒤로 가기" />}
        rightChild={<Button onClick={onClickDelete} text="삭제하기" type={'NEGATIVE'} />}
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;

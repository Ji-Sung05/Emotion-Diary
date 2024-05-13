import { useContext, useEffect, useState } from 'react';
import { DiaryStateContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { Data } from '../dataType';

interface useDiaryProps {
  id: number;
}

const useDiary = ({ id }: useDiaryProps) => {
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState<Data | null>(null);

  useEffect(() => {
    const currentDiaryItem = data.find((item) => String(item.id) === String(id));

    if (!currentDiaryItem) {
      window.alert('존재하지 않는 일기입니다.');
      nav('/', { replace: true });
    } else {
      setCurDiaryItem(currentDiaryItem);
    }
  }, [id, data, nav]);

  return curDiaryItem;
}

export default useDiary;
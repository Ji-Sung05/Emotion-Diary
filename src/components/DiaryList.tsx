import React, { useState, ChangeEvent } from 'react';
import './DiaryList.css';
import Button from './Button';
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';
import { Data } from '../dataType';

interface DiaryListProps {
  data: Data[];
}

const DiaryList: React.FC<DiaryListProps> = ({ data }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState<string>('');

  const onChangeSortType = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value);
  };

  const getSortedData = (): Data[] => {
    return data.slice().sort((a, b) => {
      if (sortType === 'oldest') {
        return a.createDate - b.createDate;
      } else {
        return b.createDate - a.createDate;
      }
    });
  };

  const sortedData = getSortedData();

  return (
    <div className='DiaryList'>
      <div className='menu_bar'>
        <select value={sortType || 'latest'} onChange={onChangeSortType}>
          <option value='latest'>최신순</option>
          <option value='oldest'>오래된 순</option>
        </select>
        <Button onClick={() => nav('/new')} text='새 일기 쓰기' type='POSITIVE' />
      </div>
      <div className='list_wrapper'>
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
import './App.css';
import React, { useReducer, useRef, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import NotFound from './pages/NotFound';
import Edit from './pages/Edit';
import { Data } from './dataType';

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

type Action = "CREATE" | "UPDATE" | "DELETE";
interface ActionType {
  type: Action;
  data?: Data;
  id?: number;
}

const mockData: Data[] = [
  {
    id: 1,
    createDate: new Date("2024-02-19").getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createDate: new Date("2024-02-18").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createDate: new Date("2024-01-07").getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  },
];

function reducer(state: Data[], action: ActionType): Data[] {
  switch (action.type) {
    case 'CREATE':
      return[action.data!, ...state];
    case 'UPDATE':
      return state.map((item) => String(item.id) === String(action.data?.id) ? action.data! : item);
    case 'DELETE':
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

export const DiaryStateContext = createContext<Data[]>(mockData);
export const DiaryDispatchContext = createContext<{ 
  onCreate: Function, 
  onUpdate: Function, 
  onDelete: Function 
}>({ 
  onCreate: () => {}, 
  onUpdate: () => {}, 
  onDelete: () => {} 
});

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  //새로운 일기 추가
  //인수들 타입을 따로 빼서 깔끔하게 만들기
  const onCreate = (createDate: number, emotionId: number, content: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createDate,
        emotionId,
        content,
      }
    })
  }
  
  //기존 일기 수정
  const onUpdate = (id: number, createDate: number, emotionId: number, content: string) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createDate,
        emotionId,
        content,
      }
    })
  }

  //기존 일기 삭제
  const onDelete = (id: number): void => {
    dispatch({
      type: "DELETE",
      id,
    });
  };
  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;

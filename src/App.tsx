import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import NotFound from './pages/NotFound';

import { getEmotionImage } from './utils/get-emotion-image';
import Button from './components/Button';
import Header from './components/Header';

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

function App() {

  return (
    <>
    <Header title={"Header"} leftChild={<Button text={"Left"} type={"DEFAULT"} onClick={() => {
      console.log("123번 버튼 클릭");
    }} />} rightChild={<Button text={"right"} type={"DEFAULT"} onClick={() => {
      console.log("123번 버튼 클릭");
    }} />} />
    <Button text={"123"} type={"DEFAULT"} onClick={() => {
      console.log("123번 버튼 클릭");
    }} />
    <Button text={"123"} type={"POSITIVE"} onClick={() => {
      console.log("123번 버튼 클릭");
    }} />
    <Button text={"123"} type={"NEGATIVE"} onClick={() => {
      console.log("123번 버튼 클릭");
    }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

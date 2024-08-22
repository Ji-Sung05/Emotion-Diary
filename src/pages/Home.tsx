import React, { useState, useContext } from 'react'
import { DiaryStateContext } from '../App'
import Header from '../components/Header'
import Button from '../components/Button'
import DiaryList from '../components/DiaryList'
import { Data } from '../dataType'
import usePageTitle from '../hooks/usePageTitle'

//주어진 기준 날짜와 데이터 배열을 기반으로 해당 월의 데이터를 필터링하여 반환한다.
const getMonthlyData = (pivotDate: Date, data: Data[]): Data[] => {
  const beginTime = new Date(
    pivotDate.getFullYear(), 
    pivotDate.getMonth(), 1, 0, 0, 0).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime();

  return data.filter((item) => beginTime <= item.createDate && item.createDate <= endTime);
}

const Home: React.FC = () => {
  usePageTitle('감정 일기장')
  const data = useContext(DiaryStateContext) as Data[];
  
  const [pivotDate, setPivotDate] = useState(new Date());
  const monthlyData = getMonthlyData(pivotDate, data);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
  }

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
  }

  return (
    <div>
      <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`} leftChild={<Button onClick={onDecreaseMonth} text={"<"} />} rightChild={<Button onClick={onIncreaseMonth} text={">"} />} />
      <DiaryList data={monthlyData} />
    </div>
  )
}

export default Home
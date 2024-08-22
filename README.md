# 감정 일기 프로젝트

### 프로젝트 목적
인프런 한입 리액트 강의에서 진행한 프로젝트이지만 타입스크립트로 진행한 프로젝트이다.

### 플랫폼
Web

### 개발 인원 1명

### 개발 환경
언어: TypeScript
IDE: VS Code

### 개발 기간
2024.05.04 ~ 2024.05.14
<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/4f0b6605-4d96-4d3c-a67b-d13bbc358dc0" /></td>
    <td><img src="https://github.com/user-attachments/assets/844b328b-3300-43d6-8793-686951f27544" /></td>
  </tr>
</table>

### 주요 기능
`getStringedDate` 함수를 작성해서 주어진 `Date` 객체를 `yyyy-mm-dd` 형식의 문자열로 변환하는 기능
```typeScript
export const getStringedDate = (targetDate: Date): string => {
  // 날짜 -> yyyy-mm-dd
  let year: number | string = targetDate.getFullYear();
  let month: number | string = targetDate.getMonth() + 1;
  let date: number | string = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};
```
주어진 `targetDate`에서 연월일을 반환해서 월일이 1자리 숫자인 경우 앞에 `0`을 붙여 두자리로 만든다.
최종적으로 `yyyy-mm-dd` 형식의 문자열을 반환한다.

`getMonthlyData` 함수를 작성하여 주어진 날짜와 데이터 배열을 기반으로 해당 월의 데이터를 필터링하여 반환한다.
```typeScript
const getMonthlyData = (pivotDate: Date, data: Data[]): Data[] => {
  const beginTime = new Date(
    pivotDate.getFullYear(), 
    pivotDate.getMonth(), 1, 0, 0, 0).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime();

  return data.filter((item) => beginTime <= item.createDate && item.createDate <= endTime);
}
```
`beginTime`은 해당 월의 첫 번째 날의 시작 시간을 밀리초로 계산한 값
`endTime`은 해당 월의 마지막 날의 마지막 시간을 밀리초로 계산한 값
데이터 필터링: 해당하는 데이터만 필터링하여 반환한다.

`reducer`와 `context API`를 사용해서 일기 작성, 수정, 삭제 기능을 제공

### 동작 방식
1. 새 일기 쓰기를 누르면 두 번째 사진으로 이동한다.
2. 오늘의 날짜와 감정, 일기를 작성하고 작성완료 버튼을 누르면
3. 첫 번째 사진에 작성한 일기가 나타난다.
상단에 '<', '>' 버튼을 눌러 해당하는 달에 작성한 일기를 볼 수 있다.

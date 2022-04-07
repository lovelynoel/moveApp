import React from 'react';
import Fruit from './Orange'; //앞이 컴포먼트 이름 뒤에가 파일이름
// 컴포 불러오기

//map 함수 사용해서 불러오기
const Fruitlike=[
  {
    id: 1,
    name : 'banana',
    image : 'https://cdn-icons-png.flaticon.com/512/284/284780.png',
    rating : 5,
  },
  {
    id: 2,
    name : 'apple',
    image : 'https://cdn-icons-png.flaticon.com/512/4583/4583405.png',
    rating : 4.9,
  },
  {
    id: 3,
    name : 'orange',
    image : 'https://cdn-icons-png.flaticon.com/512/135/135620.png',
    rating : 4.7,
  }
]
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {Fruitlike.map((dish) => <Fruit key={dish.id} name={dish.name} picture={dish.image}/>)}
    </div>
  );
}

export default App;

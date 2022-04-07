import React from 'react';
import Fruit from './Orange'; //앞이 컴포먼트 이름 뒤에가 파일이름
// 컴포 불러오기
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
        <Fruit fav='banana'/>
        <Fruit fav='apple'/>
        <Fruit fav='orange'/>
    </div>
  );
}

export default App;

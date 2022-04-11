import React from 'react';//앞이 컴포먼트 이름 뒤에가 파일이름// 컴포 불러오기//map 함수 사용해서 불러오기
/* import Home from './routes/home'; */
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from "./routes/Detail";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path='/' exact={true} component={Home} />
      <Route path='/About' component={About} />
      <Route path='/movie-detail' component={Detail} />
    </HashRouter>
    )
}

export default App;

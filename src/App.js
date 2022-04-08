
import React from 'react';//앞이 컴포먼트 이름 뒤에가 파일이름// 컴포 불러오기//map 함수 사용해서 불러오기
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {

    state = {
      isLoading : true,
    }
   getMovies = async () => {
     const {
       data : {
         data: {movies},
       },
     }  = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating'); // 가져올때는 get 사용
     this.setState({movies, isLoading : false });
   }
   componentDidMount(){
     this.getMovies();
   }
  render(){
    const {isLoading, movies} = this.state;
    return (
      <section className='container'>
        {isLoading ? (
          <div className='loader'>
            <span className='loader__text'>'Loading.....'</span>
          </div>
          ) 
        :( 
          <div className='movies'>
              {movies.map((movie) => {
               return( <Movie 
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                poster={movie.medium_cover_image}
                summary={movie.summary}
                genres={movie.genres}
                />
                )
              })}
          </div>
        )}
      </section>
     )
  }
}

export default App;

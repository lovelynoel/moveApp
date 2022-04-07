import React from 'react';

/* function Fruit(props){ // 대문자로 시작
    console.log(props)
    return(
        <h3>I love {props.fav}</h3> //꼭 return 값 안에 작성하기
    )
} */

function Fruit( {fav} ){
    return <h1> I like {fav} </h1>
}

export default Fruit;
import React from 'react';

class Detail extends React.Component {
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push('/');
        }
    }
    render(){
        const {location} = this.props; // this는 클래스 한테만 쓸수 있음 함수한테는 못씀
        if(location.state){
        return (
            <span>{location.state.title}</span>
        )
        }else{
            return null;
        }
    }
}
export default Detail;
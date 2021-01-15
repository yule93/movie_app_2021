import React from 'react';

class Detail extends React.Component {
    // render()가 먼저 일어나고 componentDidMount()가 일어난다
    componentDidMount() {
        const {location, history} = this.props;
        if(location.state === undefined) {
            history.push("/");      // movie에 관련된 정보가 없이 이 링크로 온다면 다시 홈페이지로 백 시킴
        }
    }
    render() {
        const {location} = this.props;
        if(location.state) {
            return <span>{ location.state.title }</span>;
        }
        else {
            return null;
        }
    }
}

/*function Detail({location}) {
    console.log(location);
    return (
        <div>hello</div>
    );
}*/

export default Detail;
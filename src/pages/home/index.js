import React from 'react';
import Test from "./test";
import NavTools from "../../components/NavTools";
import Test2 from "./test2";

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            time: ''
        }

    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleString(),
            })
        }, 1000)
    }


    render() {
        const {time} = this.state;
        return (
            <div>
                {/*<h3>欢迎来到首页</h3>*/}
                <NavTools title="函数组件与 class组件" description="函数组件与class组件的区别" link="https://www.crazyming.com/"/>
                {time}
                <Test time={time}/>

                <Test2 time={time}/>
            </div>
        );
    }


}

import React from "react";
import '../../style/login.scss';

export default class Login extends React.Component {
    render() {
        return (
            <div className="login_wrapper">
                <div className="block"><h3>欢迎来到登录界面</h3>


                    <div className="form">

                        <input type="text" value="demo" placeholder="用户名"/>
                        <input type="password" value="demo" placeholder="密码"/>

                        <button>登录</button> <button>注册</button>
                    </div>
                </div>
            </div>
        );
    }

}

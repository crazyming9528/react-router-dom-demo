import React from 'react'

import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';

import Main from "../pages/main";//子页面的父级框架
import About from "../pages/about";//关于页面
import Home from "../pages/home";//首页页面
import List from "../pages/goods/list";//关于页面
import UserCenter from '../pages/auth/user-center'//登录页面
import Login from '../pages/auth/login'//登录页面


const R = () => (
    <HashRouter>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" render={() =>
                <Main>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/list" component={List}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/user-center" component={UserCenter}/>
                </Main>
            }/>
            <Redirect from="/" to='/frame'/>
        </Switch>
    </HashRouter>
);

export default R;

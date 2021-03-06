import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { URL } from "../../route/route";
import './header.less';



export default class Header extends Component {
    render() {
        return (
            <header id="header">
                <div>
                    <img src="./images/logo.png" alt="" />
                    <div>
                        延陵荟互助系统
                    </div>
                    <div id="login_reg">
                        <Link to={URL.login.relativePath}>登录</Link>&nbsp;
                        <span>|</span>&nbsp;
                        <Link to={URL.register.relativePath}>注册</Link>
                    </div>
                </div>
            </header>
        );
    }
}

 



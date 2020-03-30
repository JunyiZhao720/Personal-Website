import {
    Route,
    Switch,
    NavLink,
    Redirect
} from "react-router-dom";
import React,{Component} from "react";
import About from "./Manager/about";
import User from "./Manager/user";
import Blog from "./Manager/blog";
// import './Manage/manager.css'
import Container from 'react-bootstrap/Container'

export default class Manager extends Component {

    render() {
        return(

            <div className="jumbotron">
                <div className="row">
                    <div className="">
                        <div className="page-header">
                            <h2>Website Demo</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="">
                        <div className="list-group">
                            {/*导航路由链接*/}
                            <NavLink className="list-group-item" to='/manager/about'>About</NavLink>
                            <NavLink className="list-group-item" to='/manager/user'>User</NavLink>
                            <NavLink className="list-group-item" to='/manager/Blog'>Blog</NavLink>
                        </div>
                    </div>
                    <div className="">
                        <div className="panel">
                            <div className="panel-body" style={{padding:15}}>
                                {/*可切换的路由组件*/}
                                <Switch>
                                    <Route path='/manager/about' component={About}/>
                                    <Route path='/manager/user' component={User}/>
                                    <Route path='/manager/blog' component={Blog}/>
                                    <Redirect to ='/manager/blog'/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

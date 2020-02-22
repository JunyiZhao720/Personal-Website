import {
    Route,
    Switch,
    NavLink,
    Redirect
} from "react-router-dom";
import React,{Component} from "react";
import About from "./Manage/about";
import User from "./Manage/user";
import Blog from "./Manage/blog";
import './Manage/manager.css'
import Container from 'react-bootstrap/Container'

export default class Manager extends Component {

    render() {
        return(

            <div className="jumbotron">
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            <h2>Website Demo</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*导航路由链接*/}
                            <NavLink className="list-group-item" to='/manager/about'>About</NavLink>
                            <NavLink className="list-group-item" to='/manager/user'>User</NavLink>
                            <NavLink className="list-group-item" to='/manager/Blog'>Blog</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
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

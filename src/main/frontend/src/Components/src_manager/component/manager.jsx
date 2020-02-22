import {
    Route,
    Switch,
    NavLink,
    Redirect
} from "react-router-dom";
import React,{Component} from "react";
import About from "../view/about";
import User from "../view/user";
import Blog from "../view/blog";
export default class Manager extends Component {

    render() {
        return(

            <div>
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
                            <NavLink className="list-group-item" to='/about'>About</NavLink>
                            <NavLink className="list-group-item" to='/user'>User</NavLink>
                            <NavLink className="list-group-item" to='/Blog'>Blog</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*可切换的路由组件*/}
                                <Switch>
                                    <Route path='/about' component={About}/>
                                    <Route path='/user' component={User}/>
                                    <Route path='/blog' component={Blog}/>
                                    <Redirect to ='/blog'/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

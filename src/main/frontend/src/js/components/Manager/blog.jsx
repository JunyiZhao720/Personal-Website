import React,{Component} from "react"
import {
    Route,
    Switch,
    NavLink,
    Redirect
} from "react-router-dom";
import Newpost from "./newpost";
import Diary from "./diary";
export default class Blog extends Component {

    render() {
        return(
            <div>
                <h2>Blog</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <NavLink to='/manager/blog/news' style={{paddingLeft:10}}>New</NavLink>
                        </li>
                        <li>
                            <NavLink to="/manager/blog/diary" style={{paddingLeft:10}}>Edit</NavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path='/manager/blog/news' component={Newpost} />
                        <Route path='/manager/blog/diary' component={Diary} />
                        <Redirect to='/manager/blog/news'/>
                    </Switch>
                </div>
            </div>
        )
    }

}

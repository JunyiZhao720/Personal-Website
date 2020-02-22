import React,{Component} from "react"
import {
    Route,
    Switch,
    NavLink,
    Redirect
} from "react-router-dom";
import News from "./news";
import Diary from "./diary";
export default class Blog extends Component {

    render() {
        return(
            <div>
                <h2>Blog</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <NavLink to='/blog/news'>News</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog/diary">Diary</NavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path='/blog/news' component={News} />
                        <Route path='/blog/diary' component={Diary} />
                        <Redirect to='/blog/news'/>
                    </Switch>
                </div>
            </div>
        )
    }

}

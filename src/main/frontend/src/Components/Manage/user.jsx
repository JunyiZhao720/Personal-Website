import {render} from 'react-dom'
import React,{Component} from "react"
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import News from "./news";
import Diary from "./diary";
export default class User extends Component {

    render() {
        return(
            <div>
                <h2>User</h2>
               <ul>
                   <li>
                       <a> setting</a>
                   </li>
                   <li>
                       <a>profile</a>
                   </li>
               </ul>

            </div>
        )
    }

}

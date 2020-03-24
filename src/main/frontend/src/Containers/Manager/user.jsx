import React,{Component} from "react"
export default class User extends Component {

    render() {
        return(
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">userName</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>

                        </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your information with
                            anyone else.</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        )
    }

}

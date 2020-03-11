import React, { Component } from 'react';

class Login extends Component {

    render() {
  
      return (
        <div className="container-fluid">
          <p>You must log in to view the page</p>
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12"></div>
            <div className="col-md-6 col-sm-4 col-xs-12">
              <form className="login-form-container">
                <div className="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" for="exampleCheck1">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12"></div>
          </div>
        </div>
      )
    }
  }

export default Login;
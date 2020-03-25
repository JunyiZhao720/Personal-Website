import React, { Component } from 'react';
import {connect} from 'react-redux';
import {login} from '../Redux/acitons';
class Login extends Component {
  state = {

    password:"123456",//default user state
    email:"123@qq.com"

  }
  handleChange=(name,val)=>{

    this.setState({[name]:val})
    console.log(this.state)
  }
  Login =()=>{
    this.props.login(this.state)

  }
    render() {
      const{email} = this.props.user;
      //如果有值说明需要重定向
      if(email){
        this.props.history.replace('/') //if login is right ,we can go back to home
      }

      return (
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <div className="container-fluid">
            <p>You must log in to view the page</p>
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-12"></div>
              <div className="col-md-6 col-sm-4 col-xs-12">
                <form className="login-form-container">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                          placeholder="Enter email" name="email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password"/>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                  </div>
                  <button type="submit" className="btn btn-primary" onClick={this.Login}>Submit</button>
                </form>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12"></div>
            </div>
          </div>
        </div>
        
      )
    }
  }

export default connect(
    state =>({user:state.user}),
    {login}
)(Login);

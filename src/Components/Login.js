import React, { Component } from 'react';
import { withRouter } from "react-router";
import {UserAccount} from '../Data/UserAccount';





class Login extends Component {

  constructor() {
    super();
    this.state = {
      user: '',
      password: '',   
      isCheck: false
    };
   

  }

  


  handleSubmit = (event) => {
var isCorrect=UserAccount(this.state.user,this.state.password);   

    if(isCorrect){
      this.setState({ isCheck: false })
      let path = '/home';
      this.props.history.push(path);
    }else{
      this.setState({ isCheck: true })
    }   
    event.preventDefault();
  }

  handleChangeUser = (event) => {
    this.setState({ user: event.target.value.toString().toLowerCase() });
  }
  handleChangePassword = (event) => {
    this.setState({ password: event.target.value.toString().toLowerCase() });
  }


  render() {

    return (

      <div>
        <div className="login-form">
          <form onSubmit={this.handleSubmit}>

            <h2 className="text-center">Log in</h2>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Username" required="required" value={this.state.user} onChange={this.handleChangeUser} />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" required="required" value={this.state.password} onChange={this.handleChangePassword} />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">Log in</button>
            </div>
            <div className="form-group">
              <span style={{ color: 'red', marginRight: "10px" }}>{this.state.isCheck ? 'Invalid UserName or Password..!' : ''}</span>
            </div>
          </form>
        </div>
      </div>

    )
  }

}



export default withRouter(Login);
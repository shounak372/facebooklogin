import React from 'react';
import './Login.css';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    if(this.state.user == 'admin' && this.state.password == 'admin'){
      alert('Success! Logging in...');
    }
    else
      alert('Incorrect username or password!');
  }
  render(){
    return (
      <>
        <div className="widget-box">

          <div className="box-header">
            <h2 className="box-header-text"> Log in to Facebook </h2>
          </div>

          <div className="box-content">

            <div className="input-container">
              <TextField
                id="outlined-input"
                label="E-mail or Mobile Number"
                variant="outlined"
                onChange={(e) => this.setState({user: e.target.value})}
              />
            </div>

            <div className="input-container">
              <TextField
                id="outlined-input"
                label="Password"
                type="password"
                variant="outlined"
                onChange={(e) => this.setState({password: e.target.value})}
              />
            </div>

            <div className="btn-main">
              <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                Log in
              </Button>
            </div>

            <div id="forgot-link">
              <Link to="/forgot-password">Forgot Password/Email?</Link>
              <span> · </span>
              <Link to="/">Sign up for Facebook</Link>
            </div>

          </div>

        </div>
      </>
    );
  }
}

export default Login;

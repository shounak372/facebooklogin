import React from 'react';
import './Login.css';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';

class Forgot extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
    };
  }
  render(){
    return (
      <>
        <div className="widget-box">

          <div className="box-header">
            <h2 className="box-header-text"> Reset your password </h2>
            {/*<p id="forgot-desc"> Don't worry, it happens to all of us. Please enter your email or mobile number to request a reset.</p>*/}
          </div>

          <div className="box-content">

            <div className="input-container">
              <TextField
                id="outlined-input"
                label="Enter E-mail or Mobile Number"
                variant="outlined"
              />
            </div>

            <div className="btn-main">
              <Button variant="contained" color="primary" className="btn-box">
                Reset
              </Button>
              <Link to="/" className="btn-link">
                <Button variant="contained" color="secondary" className="btn-box">
                Cancel
                </Button>
              </Link>
            </div>

            <div id="forgot-link">
              <Link to="/">Forgot Email?</Link>
            </div>

          </div>

        </div>
      </>
    );
  }
}

export default Forgot;

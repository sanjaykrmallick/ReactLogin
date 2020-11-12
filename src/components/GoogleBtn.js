import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import {addGoogleUser} from "../redux/actions/google-login"

const CLIENT_ID = '81055878936-ttjmku47ch9nn1j8ud7b2r5sl0u5qv5n.apps.googleusercontent.com';


class GoogleBtn extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: ''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) {
      console.log(response)
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken
      }));
      this.props.addGoogleUser(response)
      this.props.history.push("/userpage")
    }
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
  }

  handleLoginFailure (response) {
    alert('Failed to log in')
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
  }

  render() {
    return (
    <div>
      { this.state.isLogined ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='Logout'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
        >
        </GoogleLogout>: <GoogleLogin
          clientId={CLIENT_ID}
          buttonText='Login'
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
        />
      }
      {/* { this.state.accessToken ? <p>Your Access Token: <br/><br/> { this.state.accessToken }</p> : null } */}

    </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
      addGoogleUser: (userLoginData) => dispatch(addGoogleUser(userLoginData)),
    };
  };
  
  export default withRouter(connect(null,mapDispatchToProps) (GoogleBtn));

// export default withRouter(GoogleBtn);
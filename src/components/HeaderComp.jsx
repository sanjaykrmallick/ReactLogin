import React, { Component, Fragment } from "react";
import { Switch, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { connect } from "react-redux";
import { removeUser } from "../redux/actions/user-data";
import {removeGoogleUser} from "../redux/actions/google-login"

class HeaderComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <a className='navbar-brand' href='/'>
            Sample APP
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
                <Link className='nav-link' to={"/login"}>
                  Login <span className='sr-only'>(current)</span>
                </Link>
              </li>
              {this.props.googleUserData.token || this.props.userData.token?<li className='nav-item'>
                <Link className='nav-link' to={"/"} onClick={this.props.removeUser} onClickCapture={this.props.removeGoogleUser} >
                  Logout
                </Link>
              </li>:null }             
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
    googleUserData:state.googleUserData,
  };
};
const mapDispatchToProps = (dispatch) => {
    return {
      removeUser: () => dispatch(removeUser()),
      removeGoogleUser:()=>dispatch(removeGoogleUser()),
    };
  };
  
  export default connect(mapStateToProps,mapDispatchToProps) (HeaderComp);

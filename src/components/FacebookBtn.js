import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import {Redirect,useHistory, withRouter} from "react-router-dom"
import {
  Col,
  Container,
  Row,
  Button,
  Card,
  CardBody,
  FormGroup,
  Label,
  Input,
  CardTitle,
  CardText,
  CardImg,CardHeader
} from "reactstrap";
import { connect } from "react-redux";
import { addUser } from "../redux/actions/user-data";

 class FacebookBtns extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: "",
      userData: {},
      pic: "",
    };

  }

  responseFacebook = (response) => {
    console.log(response);
    
    if (response.accessToken) {
        this.setState({ userData: response, pic: response.picture.data.url });
      this.setState({ isLogined: true });
   this.props.addUser(response)
    this.props.history.push("/userpage")

    } else {
      this.setState({ isLogined: false });
    }
  };

  handleLoginFailure(response) {
    alert("Failed to log in");
  }

  handleLogoutFailure(response) {
    alert("Failed to log out");
  }

  render() {
    const { userData, isLogined, pic } = this.state;
    return (
      <div>
        <div className='container d-flex'>
          <Card style={{ width: "60px",height:"50px",display:"contents"}}>

              {!isLogined && (
                <FacebookLogin
                  appId='4068078003209036'
                  autoLoad={false}
                  fields='name,email,picture'
                  scope='public_profile,user_friends'
                  callback={this.responseFacebook}
                  icon='fa-facebook'
                />
              )}
          </Card>
        </div>
        
      </div>
    );
  }
}


  
  const mapDispatchToProps = (dispatch) => {
    return {
      addUser: (userLoginData) => dispatch(addUser(userLoginData)),
    };
  };
  
  export default withRouter(connect(null,mapDispatchToProps) (FacebookBtns));

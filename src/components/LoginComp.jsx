import React, { Component, Fragment } from "react";
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
} from "reactstrap";
import GoogleBtn from "./GoogleBtn";
import FacebookBtn from "./FacebookBtn";
import {Link} from  "react-router-dom"

class LoginComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _handleClick=()=>{
    
  }

  render() {
    return (
      <Fragment>
        <div className='app flex-row  animated fadeIn innerPagesBg'>
          <Container>
            <Row className='justify-content-center'>
              <Col md='6' className='border'>
                <div className=''>
                  <div className='d-flex justify-content-between align-items-center my-3'>
                    <h4 className='m-auto'>Login</h4>
                  </div>
                  <Card className='userDetails mb-4'>
                    <CardBody>
                      <div className='d-flex flex-column'>
                        <Label>Google Login</Label>
                        <GoogleBtn />
                      </div>
                      <br />
                      <div className='d-flex flex-column'>
                        <Label>Facebook Login</Label>
                         <FacebookBtn />
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default LoginComp;

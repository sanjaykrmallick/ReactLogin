import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
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
  CardImg,
  CardTitle,
} from "reactstrap";

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                    <h4 className='m-auto'>User Data</h4>
                  </div>
                  <Card className='userDetails mb-4'>
                    <CardBody>
                      <div className='d-flex flex-column'>
                        <CardImg
                          style={{ height: "50px", width: "50px" }}
                          src={this.props.userData.profilePic ||this.props.googleUserData.profilePic}
                          roundedCircle
                        />
                        <CardTitle>{this.props.userData.userName || this.props.googleUserData.userName}</CardTitle>
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
const mapStateToProps = (state) => {
  return {
    userData: state.userData,
    googleUserData:state.googleUserData,
  };
};
export default connect(mapStateToProps, null)(UserPage);
// export default UserPage;

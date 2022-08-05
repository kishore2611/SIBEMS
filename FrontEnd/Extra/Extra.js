import React, { Component } from 'react';

import { Link } from "react-router-dom";
import './Style.css';
import { Col, Container, Form, Row, FormGroup, FormText, Button } from 'react-bootstrap';
import axios from 'axios';



class SignUp extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      fName:'',
      lName:'',
      email:'',
      phoneNo:'',
      city:'',
      state:'',
      password:'',
      confirmPassword:'',
      checkBox:''
    }
    this.changeFirstName = this.changeFirstName.bind(this)
    this.changeLastName = this.changeLastName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePhoneNo = this.changePhoneNo.bind(this)
    this.changeCity = this.changeCity.bind(this)
    this.changeState = this.changeState.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.changeConfirmPassword = this.changeConfirmPassword.bind(this)
    this.changeCheckBox = this.changeCheckBox.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  changeFirstName(event){
    this.setState({
      fName:event.target.value
    })
  }
  changeLastName(event){
    this.setState({
      lName:event.target.value
    })
  }
  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }
  changePhoneNo(event){
    this.setState({
      phoneNo:event.target.value
    })
  }
  changeCity(event){
    this.setState({
      city:event.target.value
    })
  }
  changeState(event){
    this.setState({
      state:event.target.value
    })
  }
  changePassword(event){
    this.setState({
      password:event.target.value
    })
  }
  changeConfirmPassword(event){
    this.setState({
      confirmPassword:event.target.value
    })
  }
  changeCheckBox(event){
    this.setState({
      checkBox:event.target.value
    })
  }
  onSubmit(event){
    event.preventDefault()

    const registered = {
      fName: this.state.fName,
      lName: this.state.lName,
      email: this.state.email,
      phoneNo: this.state.phoneNo,
      city: this.state.city,
      state: this.state.state,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      checkBox: this.state.checkBox
    }
    axios.post('http://localhost:4000/app/SignUp', registered)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

    this.setState = {
      fName:'',
      lName:'',
      email:'',
      phoneNo:'',
      city:'',
      state:'',
      password:'',
      confirmPassword:'',
      checkBox:''
    }
    
  }

  render() {
    return (
        <Container fluid className="bg">
          {/* <Form className="form-bg"> */}
            <Row className="justify-content-center pad ">
              <Col lg={4} md={6} sm={12}>
                <Form onSubmit={this.onSubmit} className="box p-5 rounded">
                  <h3 className="text-center text-white fw-normal">SignUp</h3>
                  <p className="text-muted text-center">Please enter your Detail to SignUp</p>
                  <FormGroup className="mb-3">
                    <Row>
                      <Col>
                        <Form.Control type="text" placeholder="First Name" onChange={this.changeFirstName} value={this.state.fName}  />
                      </Col>
                      <Col>
                        <Form.Control type="text" placeholder="Last Name" onChange={this.changeLastName} value={this.state.lName} />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="email" placeholder="Username or Email" onChange={this.changeEmail} value={this.state.email} />
                  </FormGroup>
                  <FormGroup className="mb-3" controlId="formBasicPhone">
                    <Form.Control type="text" placeholder="Phone Number" onChange={this.changePhoneNo} value={this.state.phoneNo} />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <Row>
                      <Col>
                        <Form.Control type="text" placeholder="City" onChange={this.changeCity} value={this.state.city} />
                      </Col>
                      <Col>
                        <Form.Control type="text" placeholder="State" onChange={this.changeState} value={this.state.state} />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <Form.Control type="password" placeholder="Password" onChange={this.changePassword} value={this.state.password} />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <Form.Control type="password" placeholder="Re-Enter Password" onChange={this.changeConfirmPassword} value={this.state.confirmPassword} />
                  </FormGroup>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onChange={this.changeCheckBox} value={this.state.checkBox} label="I agree all Statements in Terms of Services" className="text-muted" />
                  </Form.Group>
                  <Link to="/Login">
                    <Button variant="primary" type="submit" value="submit" className="text-center align-center mb-3 px-5 d-grid col-6 mx-auto">
                      SignUp
                    </Button>
                  </Link>
                  <FormText className="text-muted">
                    <Link to="/Login" className="forgot">
                      <p className="text-center text-muted">Already Member</p> 
                    </Link>
                  </FormText>

                </Form>
              </Col>
            </Row>
          {/* </Form> */}
        </Container>
      );
  }
}

export default SignUp;

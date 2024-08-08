import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md={6} lg={4}>
          <h2 className="text-center">Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" value={form.email} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" value={form.password} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">Confirm Password</Label>
              <Input type="password" name="confirmPassword" id="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
            </FormGroup>
            <Button type="submit" color="primary" block>Sign Up</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;

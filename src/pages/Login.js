import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Spinner, Modal, ModalHeader, ModalBody } from 'reactstrap';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('https://challenge-express-api.vercel.app/api/auth/login', form, { timeout: 5000 });
      setAlert({ show: true, message: 'Login successful!' });
    } catch (error) {
      if (error.code === 'ECONNABORTED') {
        setAlert({ show: true, message: 'Request timed out. Please try again.' });
      } else if (error.response) {
        setAlert({ show: true, message: error.response.data.message || 'Login failed. Please check your credentials.' });
      } else {
        setAlert({ show: true, message: 'An unknown error occurred.' });
      }
    } finally {
      setLoading(false);
    }
  };

  const toggleAlert = () => setAlert({ ...alert, show: !alert.show });

  return (
    <Container>
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md={6} lg={4}>
          <h2 className="text-center">Login</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <Button type="submit" color="primary" block disabled={loading}>
              {loading ? <Spinner size="sm" /> : 'Login'}
            </Button>
          </Form>
        </Col>
      </Row>
      
      {/* Alert Modal */}
      <Modal isOpen={alert.show} toggle={toggleAlert}>
        <ModalHeader toggle={toggleAlert}>Login Alert</ModalHeader>
        <ModalBody>{alert.message}</ModalBody>
      </Modal>
    </Container>
  );
};

export default Login;

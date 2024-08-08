import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const EditProfile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Profile updated:', profile);
  };

  return (
    <Container fluid style={{ height: '100vh' }} className="d-flex align-items-center justify-content-center">
      <Row className="w-100">
        <Col md={8} lg={6} className="mx-auto">
          <Card className="mt-4">
            <CardBody>
              <h2>Edit Profile</h2>
              <Form onSubmit={handleSave}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={profile.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={profile.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="bio">Bio</Label>
                  <Input
                    type="textarea"
                    name="bio"
                    id="bio"
                    value={profile.bio}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="phone">Phone</Label>
                  <Input
                    type="text"
                    name="phone"
                    id="phone"
                    value={profile.phone}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="address">Address</Label>
                  <Input
                    type="text"
                    name="address"
                    id="address"
                    value={profile.address}
                    onChange={handleChange}
                  />
                </FormGroup>
                <Button type="submit" color="primary">Save Changes</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProfile;

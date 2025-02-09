import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, password };

    try {
      const response = await axios.post('https://product-backend-gnm9.onrender.com/user', data);
      alert('Signup successful!');
      navigate('/login'); 
    } catch (error) {
      setErrorMessage('Error creating account.');
      console.error(error);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row>
        <Col>
          <Card className="shadow-lg p-4 rounded-3" style={{ width: '22rem' }}>
            <Card.Body>
              <h3 className="text-center mb-4">Sign Up</h3>
              {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>} {/* Error message rendered once */}
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button type="submit" className="w-100">Sign Up</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;

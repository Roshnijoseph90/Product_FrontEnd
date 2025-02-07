import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import './Home.css';  


const Home = () => {
  return (
    <div>
      <h1  className="center-text">Find Your Perfect Style, All in One Place</h1>
      <p className="center-text">Elevate your lifestyle with the best deals on the latest products, only at our online store.</p>

      <Container className="image-container" >
        <Row>
          <Col xs={3}>

            <Image src="product.jpg" className='custom-image' alt="image" rounded fluid/>
            </Col>
            <Col xs={3}>
            <Image src="product1.jpg" className='custom-image' alt="image" rounded fluid/>
            </Col>
            <Col xs={3}>
            <Image src="product2.jpg" className='custom-image' alt="image" rounded fluid/>
            </Col>
             <Col xs={3}>
            <Image src="product3.jpg" className='custom-image' alt="image" rounded fluid/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

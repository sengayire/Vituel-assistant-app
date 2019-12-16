import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'
import escortImage from '../../assets/images/escortImage.jpg'

const ImageContainer = () => (
    <div className="image-container">
        <Container>
  <Row>
    <Col >
      <Image src={escortImage}  width="185" height="250" rounded />
    </Col>
    </Row>
</Container>
<div className="info"><p>{"SENGAYIRE Prince"}</p></div>
    </div>
)
export default ImageContainer;
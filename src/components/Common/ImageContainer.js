import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'
import escortImage from '../../assets/images/escortImage.jpg'

const ImageContainer = ({width, height, escortName}) => (
    <div className="image-container">
        <Container>
  <Row>
    <Col >
      <Image src={escortImage}  width={width} height={height} rounded />
    </Col>
    </Row>
</Container>
<div className="info"><p>{escortName}</p></div>
    </div>
)
export default ImageContainer;
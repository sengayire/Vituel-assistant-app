import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'
import escortImage from '../../assets/images/escortImage.jpg'

  class ImageContainer extends Component {
    render() {
      const { width, height, escortName, onClick } = this.props
      return(
<div className="image-container">
        <Container>
  <Row>
    <Col >
      <Image onClick={onClick}src={escortImage}  width={width} height={height} rounded />
    </Col>
    </Row>
</Container>
<div className="info"><p>{escortName}</p></div>
    </div>
      )
    }

  }
export default ImageContainer;
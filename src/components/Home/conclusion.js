import React from 'react';
import { Row, Col } from 'reactstrap';

import './style.css';
import stockPhoto from '../../photo/stock_photo.jpg'

export default function Conclusion() {
  return (
      <div className="conclusion">
        <Row className="conclusion-photo justify-content-center">
          <Col xs="10">
            <img src={stockPhoto} alt=""/>
          </Col>
        </Row>
        <Row className="justify-content-center m-2 text-center">
          <Col xs="10">
            Bring your product to life with our technology and experience.  Try out our product to see the difference in consumer engagement.
          </Col>
        </Row>
      </div>
  )
}

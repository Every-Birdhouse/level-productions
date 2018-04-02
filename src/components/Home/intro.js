import React from 'react';
import { Row, Col } from 'reactstrap';

import './style.css';

export default function Home() {
  return (
      <div>
        <Row>
          <Col xs="12" className="text-center">
            <h3 className="p-4">
              Here's what we are and here's what we do...
            </h3>
          </Col>
        </Row>
      </div>
  )
}

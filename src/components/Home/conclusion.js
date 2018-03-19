import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './style.css';
import stockPhoto from '../../photo/stock_photo.jpg'

export default function Conclusion() {
  return (
      <Container className="conclusion">
        <Row className="conclusion-photo">
          <img src={stockPhoto} alt=""/>
        </Row>
        <Row>
          <Col>
            Godard roof party hashtag scenester actually tofu cray. 90's raw denim tousled ramps. Thundercats try-hard chicharrones ennui cardigan, cronut craft beer. Hot chicken pinterest pok pok, beard vape live-edge fashion axe post-ironic pitchfork schlitz godard aesthetic gastropub distillery slow-carb. Wayfarers seitan blue bottle polaroid truffaut XOXO cliche.
          </Col>
        </Row>
      </Container>
  )
}

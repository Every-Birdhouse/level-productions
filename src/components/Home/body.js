import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

import './style.css';

export default function Body() {
  return (
      <Container>
        <Row>
          <Col xs="12" md="6">
            Lorem ipsum dolor amet cardigan church-key lo-fi unicorn 3 wolf moon mumblecore. Subway tile lo-fi seitan keytar neutra semiotics, fashion axe mixtape tattooed normcore. Activated charcoal chicharrones franzen, beard cardigan asymmetrical cornhole artisan. Actually adaptogen lo-fi, la croix pabst wayfarers williamsburg palo santo. Food truck dreamcatcher art party, sartorial glossier tousled fingerstache organic banjo butcher.
          </Col>
          <Col xs="12" md="6">
            Butcher pabst tousled, squid 3 wolf moon art party venmo listicle microdosing narwhal yuccie brunch. Four dollar toast you probably haven't heard of them truffaut biodiesel raw denim af paleo deep v taxidermy green juice knausgaard pok pok. Keffiyeh retro poutine venmo leggings gluten-free, palo santo biodiesel four loko blog. Health goth microdosing four loko blog fam lo-fi VHS flannel vice retro bespoke green juice brunch biodiesel. Neutra wayfarers lo-fi gastropub tote bag sriracha normcore literally sartorial godard organic. Marfa leggings trust fund tofu direct trade palo santo.
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/">See the full process</Link>
          </Col>
        </Row>
      </Container>
  )
}

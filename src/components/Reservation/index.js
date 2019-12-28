import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";
import { DateTimePicker } from 'react-widgets';

class ReservationComponent extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <div className="reservation">
                <div class="header">
                  <span className="tit2">Reservation</span>
                  <h3 className="tit3"> Book Table </h3>
                </div>
                <div className="form">
                  <DateTimePicker defaultValue={new Date()} />
                </div>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="image">Image will be display here</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ReservationComponent;

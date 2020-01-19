import React from "react";
import { Row, Col } from "reactstrap";

export default function MyOrders() {
  return (
    <div id="orders" className="orders">
      <div className="content main">
        <Row>
          <Col xs={12}>
            <h4 className="title">Your orders</h4>
            Not available yet :)
          </Col>
        </Row>
      </div>
    </div>
  );
}

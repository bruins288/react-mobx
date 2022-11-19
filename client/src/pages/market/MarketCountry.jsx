import React from "react";
import { Nav } from "react-bootstrap";

function MarketCountry() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home" className="fs-5">
      <Nav.Item>
        <Nav.Link eventKey="/home">Процентная ставка</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Доходность 10-летних облигаций</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled">Фондовый индекс</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default MarketCountry;

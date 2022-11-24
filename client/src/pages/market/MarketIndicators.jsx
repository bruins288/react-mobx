import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index.js";
import { Form, Container, Row, Col } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import StreamingPlugin from "chartjs-plugin-streaming";
import "chart.js/auto";
import {
  GREEN_BACK_1,
  GREEN_LINE_1,
  BLUE_BACK_1,
  BLUE_LINE_1,
} from "../../utils/constantsColor.js";

Chart.register(StreamingPlugin);
Chart.defaults.font.size = 14;

const MarketIndicators = observer(() => {
  const { marketKeyStore } = React.useContext(Context);
  const [countryId, setCountryId] = React.useState(1);
  const grafRef = React.useRef();

  console.log("render market indicators");

  return (
    <Container fluid className="p-0">
      <h1 className="text-center">
        {marketKeyStore.marketKeysData.marketName}
      </h1>
      <Row>
        <Col>
          <Form.Select
            className="text-center"
            aria-label="Выбор страны"
            onChange={(e) => setCountryId(Number(e.target.value))}
          >
            {marketKeyStore.countries.map((country) => (
              <option value={country.id} key={country.id}>
                {country.countryName}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={12} lg={6}>
          <h2 className="text-center">
            {marketKeyStore.marketKeysData.marketNames[0]}
          </h2>
          <Line
            ref={grafRef}
            data={marketKeyStore.getDataGraf(
              countryId,
              marketKeyStore.tReuters_10,
              true,
              GREEN_BACK_1,
              GREEN_LINE_1
            )}
          />
        </Col>
        <Col md={12} lg={6}>
          <h2 className="text-center">
            {marketKeyStore.marketKeysData.marketNames[1]}
          </h2>
          <Line
            ref={grafRef}
            data={marketKeyStore.getDataGraf(
              countryId,
              marketKeyStore.stocks,
              true,
              BLUE_BACK_1,
              BLUE_LINE_1
            )}
          />
        </Col>
      </Row>
    </Container>
  );
});

export default MarketIndicators;

import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index.js";
import { Form, Container, Row, Col } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import StreamingPlugin from "chartjs-plugin-streaming";
import "chart.js/auto";

Chart.register(StreamingPlugin);
Chart.defaults.font.size = 14;

const MarketIndicators = observer(() => {
  const { marketKeyStore } = React.useContext(Context);
  const [countryId, setCountryId] = React.useState(1);
  const grafRef = React.useRef();

  console.log("render market indicators");

  const chartOptions = {
    legend: {
      positions: "left",
    },
  };

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
        <Col>
          <h2 className="text-center">
            {marketKeyStore.marketKeysData.marketNames[0]}
          </h2>
          <Line
            ref={grafRef}
            data={marketKeyStore.buildGrafReuters_10(countryId)}
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <h2 className="text-center">
            {marketKeyStore.marketKeysData.marketNames[1]}
          </h2>
          <Line
            ref={grafRef}
            data={marketKeyStore.buildGrafStock(countryId)}
            options={chartOptions}
          />
        </Col>
      </Row>
    </Container>
  );
});

export default MarketIndicators;

import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index.js";
import { Container, Row, Col } from "react-bootstrap";
import InputSelect from "../../components/ui/inputs/InputSelect.jsx";
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

const LaggingIndicators = observer(() => {
  const { laggingKeyStore } = React.useContext(Context);
  const [countryId, setCountryId] = React.useState(1);
  const grafRef = React.useRef();

  console.log("render lagging indicators");
  return (
    <Container fluid className="p-0">
      <h1 className="text-center">
        {laggingKeyStore.laggingKeysData.laggingName}
      </h1>
      <Row>
        <Col>
          <InputSelect
            dataList={laggingKeyStore.countries}
            setData={setCountryId}
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={12} lg={6}>
          <h2 className="text-center">
            {laggingKeyStore.laggingKeysData.laggingNames[0]}
          </h2>
          <Line
            ref={grafRef}
            data={laggingKeyStore.getDataGraf(
              countryId,
              laggingKeyStore.unemploymentRates,
              true,
              GREEN_BACK_1,
              GREEN_LINE_1
            )}
          />
        </Col>
        <Col md={12} lg={6}>
          <h2 className="text-center">
            {laggingKeyStore.laggingKeysData.laggingNames[1]}
          </h2>
          <Line
            ref={grafRef}
            data={laggingKeyStore.getDataGraf(
              countryId,
              laggingKeyStore.inflationRates,
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

export default LaggingIndicators;

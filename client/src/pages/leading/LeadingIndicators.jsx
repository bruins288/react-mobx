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

const LeadingIndicators = observer(() => {
  const { leadingKeyStore } = React.useContext(Context);
  const [countryId, setCountryId] = React.useState(1);
  const grafRef = React.useRef();

  console.log("render leading indicators");
  return (
    <Container fluid className="p-0">
      <h1 className="text-center">
        {leadingKeyStore.leadingKeysData.leadingName}
      </h1>
      <Row>
        <Col>
          <InputSelect
            dataList={leadingKeyStore.countries}
            setData={setCountryId}
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={12} lg={6}>
          <h2 className="text-center">
            {leadingKeyStore.leadingKeysData.leadingNames[0]}
          </h2>
          <Line
            ref={grafRef}
            data={leadingKeyStore.getDataGraf(
              countryId,
              leadingKeyStore.manufacturing,
              true,
              GREEN_BACK_1,
              GREEN_LINE_1
            )}
          />
        </Col>
        <Col md={12} lg={6}>
          <h2 className="text-center">
            {leadingKeyStore.leadingKeysData.leadingNames[1]}
          </h2>
          <Line
            ref={grafRef}
            data={leadingKeyStore.getDataGraf(
              countryId,
              leadingKeyStore.services,
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

export default LeadingIndicators;

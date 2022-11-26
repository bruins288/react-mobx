import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index.js";
import { Container, Row, Col } from "react-bootstrap";
import InputSelect from "../../components/ui/inputs/InputSelect.jsx";
import DataGraf from "../../components/DataGraf.jsx";
import {
  GREEN_BACK_1,
  GREEN_LINE_1,
  BLUE_BACK_1,
  BLUE_LINE_1,
} from "../../utils/constantsColor.js";

const LaggingIndicators = observer(() => {
  const { laggingStore } = React.useContext(Context);
  const [countryId, setCountryId] = React.useState(1);

  console.log("render lagging indicators");
  return (
    <Container fluid className="p-0">
      <h1 className="text-center">
        {laggingStore.laggingKeysData.laggingName}
      </h1>
      <Row>
        <Col>
          <InputSelect
            dataList={laggingStore.countries}
            setData={setCountryId}
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={12} lg={6}>
          <DataGraf
            keyName={laggingStore.laggingKeysData.laggingNames[0]}
            dataGraf={laggingStore.getDataGraf(
              countryId,
              laggingStore.unemploymentRates,
              true,
              GREEN_BACK_1,
              GREEN_LINE_1
            )}
          />
        </Col>
        <Col md={12} lg={6}>
          <DataGraf
            keyName={laggingStore.laggingKeysData.laggingNames[1]}
            dataGraf={laggingStore.getDataGraf(
              countryId,
              laggingStore.inflationRates,
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

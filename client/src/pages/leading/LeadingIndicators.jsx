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

const LeadingIndicators = observer(() => {
  const { leadingStore } = React.useContext(Context);
  const [countryId, setCountryId] = React.useState(1);

  console.log("render leading indicators");
  return (
    <Container fluid className="p-0">
      <h1 className="text-center">
        {leadingStore.leadingKeysData.leadingName}
      </h1>
      <Row>
        <Col>
          <InputSelect
            dataList={leadingStore.countries}
            setData={setCountryId}
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={12} lg={6}>
          <DataGraf
            keyName={leadingStore.leadingKeysData.leadingNames[0]}
            dataGraf={leadingStore.getDataGraf(
              countryId,
              leadingStore.manufacturing,
              true,
              GREEN_BACK_1,
              GREEN_LINE_1
            )}
          />
        </Col>
        <Col md={12} lg={6}>
          <DataGraf
            keyName={leadingStore.leadingKeysData.leadingNames[1]}
            dataGraf={leadingStore.getDataGraf(
              countryId,
              leadingStore.services,
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

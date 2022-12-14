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

const MarketIndicators = observer(() => {
  const { marketStore } = React.useContext(Context);
  const [countryId, setCountryId] = React.useState(1);

  console.log("render market indicators");

  return (
    <Container fluid className="p-0">
      <h1 className="text-center">{marketStore.marketKeysData.marketName}</h1>
      <Row>
        <Col>
          <InputSelect
            dataList={marketStore.countries}
            setData={setCountryId}
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={12} lg={6}>
          <DataGraf
            keyName={marketStore.marketKeysData.marketNames[0]}
            dataGraf={marketStore.getDataGraf(
              countryId,
              marketStore.tReuters_10,
              true,
              GREEN_BACK_1,
              GREEN_LINE_1
            )}
          />
        </Col>
        <Col md={12} lg={6}>
          <DataGraf
            keyName={marketStore.marketKeysData.marketNames[1]}
            dataGraf={marketStore.getDataGraf(
              countryId,
              marketStore.stocks,
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

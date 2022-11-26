import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index.js";
import { Tab, Tabs, Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DataGraf from "../../components/DataGraf.jsx";
import { GREEN_BACK_1, GREEN_LINE_1 } from "../../utils/constantsColor.js";

const MarketCountry = observer(() => {
  const { marketStore } = React.useContext(Context);
  const { country } = useParams();

  let nameIndicators = marketStore.getNameIndicatorsByCountryId(
    marketStore.countriesShortNameKeys.get(country),
    marketStore.marketKeysData.marketNames,
    marketStore.tReuters_10,
    marketStore.stocks,
    marketStore.rates,
    marketStore.YR_10,
    marketStore.YR_2,
    marketStore.resources
  );

  console.log("render market country");

  return (
    <Container fluid>
      <h1 className="text-center">{marketStore.marketKeysData.marketName}</h1>
      <Row>
        <Col lg={10}>
          <Tabs
            key={nameIndicators[2].id}
            defaultActiveKey={nameIndicators[2].id}
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            {nameIndicators.map((indicator) => (
              <Tab
                key={indicator.id}
                eventKey={indicator.id}
                title={indicator.indicatorName}
              >
                <Row className="w-100">
                  <Col lg={12}>
                    <DataGraf
                      keyName={indicator.title}
                      dataGraf={marketStore.getObjectGraf(
                        indicator.data,
                        indicator.indicatorName,
                        false,
                        GREEN_BACK_1,
                        GREEN_LINE_1
                      )}
                    />
                  </Col>
                </Row>
              </Tab>
            ))}
            <Tab eventKey={"10-2Y"} title={"10-2 Year Bond "}></Tab>
          </Tabs>
        </Col>
        <Col lg={2}>
          <h3 className="text-center">Справка о рыночных индикаторах</h3>
          <p className="lead"></p>
        </Col>
      </Row>
    </Container>
  );
});

export default MarketCountry;

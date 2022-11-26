import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index.js";
import { Tab, Tabs, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DataGraf from "../../components/DataGraf.jsx";
import { GREEN_BACK_1, GREEN_LINE_1 } from "../../utils/constantsColor.js";

const LaggingCountry = observer(() => {
  const { laggingStore } = React.useContext(Context);
  const { country } = useParams();

  let nameIndicators = laggingStore.getNameIndicatorsByCountryId(
    laggingStore.countriesShortNameKeys.get(country),
    laggingStore.laggingKeysData.laggingNames,
    laggingStore.unemploymentRates,
    laggingStore.inflationRates,
    laggingStore.producerPrices
  );

  console.log("render lagging country");

  return (
    <Container fluid>
      <h1 className="text-center">
        {laggingStore.laggingKeysData.laggingName}
      </h1>
      <Row>
        <Col lg={10}>
          <Tabs
            key={nameIndicators[0].id}
            defaultActiveKey={nameIndicators[0].id}
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
                      dataGraf={laggingStore.getObjectGraf(
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
          </Tabs>
        </Col>
        <Col lg={2}>
          <h3 className="text-center">Справка о запаздывающих индикаторах</h3>
          <p className="lead"></p>
        </Col>
      </Row>
    </Container>
  );
});

export default LaggingCountry;

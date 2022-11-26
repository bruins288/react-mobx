import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index.js";
import { Tab, Tabs, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DataGraf from "../../components/DataGraf.jsx";
import { GREEN_BACK_1, GREEN_LINE_1 } from "../../utils/constantsColor.js";

const LeadingCountry = observer(() => {
  const { leadingStore } = React.useContext(Context);
  const { country } = useParams();

  let nameIndicators = leadingStore.getNameIndicatorsByCountryId(
    leadingStore.countriesShortNameKeys.get(country),
    leadingStore.leadingKeysData.leadingNames,
    leadingStore.manufacturing,
    leadingStore.services,
    leadingStore.orders
  );

  console.log("render leading country");

  return (
    <Container fluid>
      <h1 className="text-center">
        {leadingStore.leadingKeysData.leadingName}
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
                      dataGraf={leadingStore.getObjectGraf(
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
          <h3 className="text-center">Справка об опережающих индикаторах</h3>
          <p className="lead"></p>
        </Col>
      </Row>
    </Container>
  );
});

export default LeadingCountry;

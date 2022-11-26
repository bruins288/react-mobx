import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index.js";
import { Tab, Tabs } from "react-bootstrap";
import { useParams } from "react-router-dom";

const LaggingCountry = observer(() => {
  const { laggingStore } = React.useContext(Context);
  const { country } = useParams();

  let nameIndicators = laggingStore.getNameIndicatorsByCountryId(
    laggingStore.countriesShortNameKeys.get(country),
    laggingStore.unemploymentRates,
    laggingStore.inflationRates,
    laggingStore.producerPrices
  );

  console.log("render lagging country");

  return (
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
          Глаз
        </Tab>
      ))}
    </Tabs>
  );
});

export default LaggingCountry;

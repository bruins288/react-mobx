import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index.js";
import { Tab, Tabs } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DataGraf from "../../components/DataGraf.jsx";

const MarketCountry = observer(() => {
  const { marketStore } = React.useContext(Context);
  const { country } = useParams();

  let nameIndicators = marketStore.getNameIndicatorsByCountryId(
    marketStore.countriesShortNameKeys.get(country),
    marketStore.tReuters_10,
    marketStore.stocks,
    marketStore.rates,
    marketStore.YR_10,
    marketStore.YR_2,
    marketStore.resources
  );

  console.log("render market country");

  return (
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
        ></Tab>
      ))}
      <Tab eventKey={"10-2Y"} title={"10-2 Year Bond "}></Tab>
    </Tabs>
  );
});

export default MarketCountry;

import React from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Table, Row, Col } from "react-bootstrap";
import {
  PencilFill,
  Trash,
  PlusSquare,
  CheckCircle,
  XSquare,
} from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import { Context } from "../../index.js";
import classes from "./MarketIndicators.module.css";
import { NAME_INDEX, NAME_DATA } from "../../utils/constants.js";

const MarketIndicators = observer(() => {
  const { marketKeyIndicatorStore, userStore } = useContext(Context);
  const [countryId, setCountryId] = React.useState(1);

  console.log("market indicator render");

  return (
    <>
      <h1 className="text-center">
        {marketKeyIndicatorStore.marketKeysData.marketName}
      </h1>
      <Form.Select
        className="text-center"
        aria-label="Default select example"
        onChange={(e) => setCountryId(Number(e.target.value))}
      >
        {marketKeyIndicatorStore.countries.map((country) => (
          <option value={country.id} key={country.id}>
            {country.countryName}
          </option>
        ))}
      </Form.Select>
      <Row>
        <Col md={6}>
          {marketKeyIndicatorStore.tReuters_10
            .filter((reuters) => reuters.countryId === countryId)
            .map((reuters) => (
              <Table striped bordered variant="light" hover key={countryId}>
                <thead>
                  <tr>
                    <th colSpan={12} className="text-center fs-5">
                      <span>
                        {reuters.tReutersName}&#32;&#040;{" "}
                        {marketKeyIndicatorStore.getCountryKeyById(countryId)}
                        &#041;
                      </span>
                    </th>
                  </tr>
                  <tr>
                    <th className="fw-bold text-center">#</th>
                    <th className="fw-bold text-center">{NAME_INDEX}</th>
                    <th className="fw-bold text-center">{NAME_DATA}</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {reuters.tReuters_10Data.map((data, index) => (
                    <tr key={data.id}>
                      <td>{index + 1}</td>
                      <td>{Number(data.tr_10).toFixed(3)}</td>
                      <td>{data.date}</td>
                      <td className={!userStore.isAuth && classes.display_off}>
                        <button className={classes.custom_btn}>
                          <PencilFill />
                        </button>
                        <button className={classes.custom_btn} hidden>
                          <CheckCircle />
                        </button>
                      </td>
                      <td className={!userStore.isAuth && classes.display_off}>
                        <button className={classes.custom_btn}>
                          <Trash />
                        </button>
                        <button className={classes.custom_btn} hidden>
                          <XSquare />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th className="fw-bold fs-6 text-center" colSpan={2}>
                      Среднее значение:
                    </th>
                    <td colSpan={1} className="fw-bold fs-6 text-center">
                      {marketKeyIndicatorStore.getAvgReuters_10NumbersById(
                        countryId
                      )}
                    </td>
                    <td
                      colSpan={2}
                      className={`text-center ${
                        !userStore.isAuth && classes.display_off
                      }`}
                    >
                      <button className={classes.custom_btn}>
                        <PlusSquare />
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </Table>
            ))}
        </Col>
        <Col md={6}>
          {marketKeyIndicatorStore.stocks
            .filter((stock) => stock.countryId === countryId)
            .map((stock) => (
              <Table striped bordered variant="light" hover key={countryId}>
                <thead>
                  <tr>
                    <th colSpan={12} className="text-center fs-5">
                      <span>
                        {stock.stockName}&#32;&#040;{" "}
                        {marketKeyIndicatorStore.getCountryKeyById(countryId)}
                        &#041;
                      </span>
                    </th>
                  </tr>
                  <tr>
                    <th className="fw-bold text-center">#</th>
                    <th className="fw-bold text-center">{NAME_INDEX}</th>
                    <th className="fw-bold text-center">{NAME_DATA}</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {stock.stockData.map((data, index) => (
                    <tr key={data.id}>
                      <td>{index + 1}</td>
                      <td>{Number(data.stock).toFixed(2)}</td>
                      <td key={data.id}>{data.date}</td>
                      <td className={!userStore.isAuth && classes.display_off}>
                        <button className={classes.custom_btn}>
                          <PencilFill />
                        </button>
                        <button className={classes.custom_btn} hidden>
                          <CheckCircle />
                        </button>
                      </td>
                      <td className={!userStore.isAuth && classes.display_off}>
                        <button className={classes.custom_btn}>
                          <Trash />
                        </button>
                        <button className={classes.custom_btn} hidden>
                          <XSquare />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th className="fw-bold fs-6 text-center" colSpan={2}>
                      Среднее значение:
                    </th>
                    <td colSpan={1} className="fw-bold fs-6 text-center">
                      {marketKeyIndicatorStore.getAvgStockNumbersById(
                        countryId
                      )}
                    </td>
                    <td
                      colSpan={2}
                      className={`text-center ${
                        !userStore.isAuth && classes.display_off
                      }`}
                    >
                      <button className={classes.custom_btn}>
                        <PlusSquare />
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </Table>
            ))}
        </Col>
      </Row>
    </>
  );
});

export default MarketIndicators;

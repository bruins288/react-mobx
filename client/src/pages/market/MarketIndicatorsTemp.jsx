import React from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Table, Row, Col } from "react-bootstrap";
import {
  PencilFill,
  Trash,
  PlusSquareFill,
  CheckCircleFill,
  XSquareFill,
} from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import { Context } from "../../index.js";
import classes from "./MarketIndicators.module.css";
import { NAME_INDEX, NAME_DATA } from "../../utils/constants.js";

function convertDate(dateBD) {
  let date = new Date(dateBD.split(".").reverse().join("-"));
  return date.toISOString().substring(0, 10);
}

const MarketIndicatorsTemp = observer(() => {
  const { marketKeyStore, userStore } = useContext(Context);
  const [countryId, setCountryId] = React.useState(1);
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [idToEdit, setIdToEdit] = React.useState({
    id: null,
    indicatorId: null,
  });
  //const [editedMode, setEditedMode] = React.useState();

  const handleEdit = (objectIds) => {
    setIsEditMode(true);
    setIdToEdit(objectIds);
    //setEditedMode(undefined);
  };

  console.log("market indicator render");

  return (
    <>
      <h1 className="text-center">
        {marketKeyStore.marketKeysData.marketName}
      </h1>
      <Form.Select
        className="text-center"
        aria-label="Выбор страны"
        onChange={(e) => setCountryId(Number(e.target.value))}
      >
        {marketKeyStore.countries.map((country) => (
          <option value={country.id} key={country.id}>
            {country.countryName}
          </option>
        ))}
      </Form.Select>
      <Row>
        <Col md={6}>
          {marketKeyStore.tReuters_10
            .filter((reuters) => reuters.countryId === countryId)
            .map((reuters) => (
              <Table bordered hover key={countryId}>
                <thead>
                  <tr>
                    <th colSpan={12} className="text-center fs-5">
                      <span>
                        {reuters.tReutersName}&#32;&#040;
                        {marketKeyStore.getCountryKeyById(countryId)}
                        &#041;
                      </span>
                    </th>
                  </tr>
                  <tr>
                    <th className="fw-bold text-center">#</th>
                    <th className="fw-bold text-center">{NAME_INDEX}</th>
                    <th className="fw-bold text-center">{NAME_DATA}</th>
                    {userStore.isAuth && (
                      <th className="fw-bold text-center" colSpan={2}>
                        Редактировать
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody className="text-center">
                  {reuters.tReuters_10Data.map((data, index) => (
                    <tr key={data.id}>
                      <td>{index + 1}</td>
                      <td>
                        {isEditMode &&
                        idToEdit.id === data.id &&
                        idToEdit.indicatorId === data.indicatorId ? (
                          <Form.Control
                            type="number"
                            min={0}
                            step={0.001}
                            defaultValue={data.tr_10}
                          />
                        ) : (
                          Number(data.tr_10).toFixed(3)
                        )}
                      </td>
                      <td>
                        {isEditMode &&
                        idToEdit.id === data.id &&
                        idToEdit.indicatorId === data.indicatorId ? (
                          <Form.Control
                            type={"date"}
                            defaultValue={convertDate(data.date)}
                          />
                        ) : (
                          data.date
                        )}
                      </td>
                      <td
                        className={!userStore.isAuth ? classes.display_off : ""}
                      >
                        {isEditMode &&
                        idToEdit.id === data.id &&
                        idToEdit.indicatorId === data.indicatorId ? (
                          <button
                            className={classes.custom_btn}
                            title="сохранить"
                            onClick={() => console.log(convertDate(data.date))}
                          >
                            <CheckCircleFill />
                          </button>
                        ) : (
                          <button
                            className={classes.custom_btn}
                            title="редактировать"
                            onClick={() =>
                              handleEdit({
                                id: data.id,
                                indicatorId: data.indicatorId,
                              })
                            }
                          >
                            <PencilFill />
                          </button>
                        )}
                      </td>
                      <td
                        className={!userStore.isAuth ? classes.display_off : ""}
                      >
                        {isEditMode &&
                        idToEdit.id === data.id &&
                        idToEdit.indicatorId === data.indicatorId ? (
                          <button
                            className={classes.custom_btn}
                            title="отменить"
                          >
                            <XSquareFill />
                          </button>
                        ) : (
                          <button
                            className={classes.custom_btn}
                            title="удалить"
                            onClick={() => {
                              console.log(
                                "click delete: ",
                                data.id,
                                data.indicatorId
                              );
                            }}
                          >
                            <Trash />
                          </button>
                        )}
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
                      {marketKeyStore.getAvgReuters_10NumbersById(countryId)}
                    </td>
                    <td
                      colSpan={2}
                      className={`text-center ${
                        !userStore.isAuth ? classes.display_off : ""
                      }`}
                    >
                      {!isEditMode && (
                        <button
                          className={classes.custom_btn}
                          title="Добавить"
                          onClick={() => {
                            console.log("click add");
                          }}
                        >
                          <PlusSquareFill />
                        </button>
                      )}
                    </td>
                  </tr>
                </tfoot>
              </Table>
            ))}
        </Col>
        <Col md={6}>
          {marketKeyStore.stocks
            .filter((stock) => stock.countryId === countryId)
            .map((stock) => (
              <Table bordered hover key={countryId}>
                <thead>
                  <tr>
                    <th colSpan={12} className="text-center fs-5">
                      <span>
                        {stock.stockName}&#32;&#040;
                        {marketKeyStore.getCountryKeyById(countryId)}
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
                      <td>
                        {isEditMode &&
                        idToEdit.id === data.id &&
                        idToEdit.indicatorId === data.indicatorId ? (
                          <Form.Control
                            type="text"
                            min={0}
                            step={0.01}
                            defaultValue={data.stock}
                          />
                        ) : (
                          Number(data.stock).toFixed(2)
                        )}
                      </td>
                      <td key={data.id}>
                        {isEditMode &&
                        idToEdit.id === data.id &&
                        idToEdit.indicatorId === data.indicatorId ? (
                          <Form.Control
                            type="date"
                            defaultValue={convertDate(data.date)}
                          />
                        ) : (
                          data.date
                        )}
                      </td>
                      <td
                        className={!userStore.isAuth ? classes.display_off : ""}
                      >
                        {isEditMode &&
                        idToEdit.id === data.id &&
                        idToEdit.indicatorId === data.indicatorId ? (
                          <button
                            className={classes.custom_btn}
                            title="сохранить"
                          >
                            <CheckCircleFill />
                          </button>
                        ) : (
                          <button
                            className={classes.custom_btn}
                            title="редактировать"
                            onClick={() =>
                              handleEdit({
                                id: data.id,
                                indicatorId: data.indicatorId,
                              })
                            }
                          >
                            <PencilFill />
                          </button>
                        )}
                      </td>
                      <td
                        className={!userStore.isAuth ? classes.display_off : ""}
                      >
                        {isEditMode &&
                        idToEdit.id === data.id &&
                        idToEdit.indicatorId === data.indicatorId ? (
                          <button
                            className={classes.custom_btn}
                            title="отменить"
                          >
                            <XSquareFill />
                          </button>
                        ) : (
                          <button
                            className={classes.custom_btn}
                            title="удалить"
                            onClick={() => {
                              console.log("click delete: ", data.id);
                            }}
                          >
                            <Trash />
                          </button>
                        )}
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
                      {marketKeyStore.getAvgStockNumbersById(countryId)}
                    </td>
                    <td
                      colSpan={2}
                      className={`text-center ${
                        !userStore.isAuth ? classes.display_off : ""
                      }`}
                    >
                      {!isEditMode && (
                        <button
                          className={classes.custom_btn}
                          title="добавить"
                          onClick={() => {
                            console.log("click add: ");
                          }}
                        >
                          <PlusSquareFill />
                        </button>
                      )}
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

export default MarketIndicatorsTemp;

import React from "react";
import { Form } from "react-bootstrap";

const InputSelect = (props) => {
  const { dataList, setData } = props;
  return (
    <Form.Select
      className="text-center"
      aria-label="Выбор"
      onChange={(e) => setData(Number(e.target.value))}
    >
      {dataList.map((data) => (
        <option value={data.id} key={data.id}>
          {data.countryName}
        </option>
      ))}
    </Form.Select>
  );
};

export default InputSelect;

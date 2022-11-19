import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import StreamingPlugin from "chartjs-plugin-streaming";
import "chart.js/auto";
import { useRef } from "react";
import { Table } from "react-bootstrap";

Chart.register(StreamingPlugin);

function Home() {
  const grafRef = useRef();
  const data = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Hours Studied in Geeksforgeeks",
        data: [2, 5, 7, 9, 7, 6, 4],
        fill: true,
        backgroundColor: "rgba(6, 156,51, .3)",
        borderColor: "#02b844",
      },
    ],
  };
  return (
    <MDBContainer>
      <h1 className="text-center">Процентные ставки и фондовый рынок</h1>
      <MDBRow>
        <MDBCol lg="6">
          <Line ref={grafRef} data={data} />
        </MDBCol>
        <MDBCol lg="6">
          <Line ref={grafRef} data={data} />
        </MDBCol>
        <MDBRow>
          <MDBCol lg="6">
            <Table striped bordered variant="light">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </MDBCol>
          <MDBCol lg="6">
            <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </MDBCol>
        </MDBRow>
      </MDBRow>
    </MDBContainer>
  );
}

export default Home;

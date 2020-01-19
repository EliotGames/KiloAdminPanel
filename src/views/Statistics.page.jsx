import React from "react";
import { Line } from "react-chartjs-2";
import { Row, Col } from "reactstrap";
import HighlightButton from "components/HighlightButton.jsx";
import statisticsChart from "components/Statistics/charts";

const { generateData, options } = statisticsChart;

function createTestData() {
  return [
    {value: 4521},
    {value: 3571},
    {value: 2200},
    {value: 1200},
    {value: 523},
    {value: 112},
    {value: 5998},
    {value: 4900},
    {value: 4134},
    {value: 3671},
    {value: 3011},
    {value: 2200}
  ];
}

export default function User({ device }) {
  return (
    <div id="statistics" className="statistics">
      <div className="content main">
        <h4 className="title">Statistics for Nazars super KiLo X</h4>
        <Row>
          <Col xs={3}>
            <div className="statistics-info">
              <div className="statistics-info-label">Recommended day for the next supplement:</div>
              <div className="statistics-info-day">The 15th of December</div>
              <HighlightButton title="Make an order now" className="statistics-info-button accent"/>
              <HighlightButton title="Schedule an order" className="statistics-info-button"/>
              <div className="statistics-info-note">
                Note: estimation was made for current product usage data and may be not 100% correct
              </div>
            </div>
          </Col>
          <Col xs={9}>
            <div className="main-graph">
              <Line data={generateData(createTestData())} options={options}/>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

import HighlightButton from "components/HighlightButton.jsx";
import { API, formatLastUpdateMessage } from "helpers/index";

const renderDataWithGradient = (data, canvas) => {
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 100, 100);

  const value = data.datasets[0].data[0];

  if (value >= 75) {
    gradient.addColorStop(0, "#01AA4D");
    gradient.addColorStop(0.5, "#00BE70");
    gradient.addColorStop(1, "#01AA4D");
  } else if (value < 75 && value > 25) {
    gradient.addColorStop(0, "#F6D102");
    gradient.addColorStop(0.5, "#F2E201");
    gradient.addColorStop(1, "#F6D102");
  } else {
    gradient.addColorStop(0, "#DB324F");
    gradient.addColorStop(0.5, "#F22D34");
    gradient.addColorStop(1, "#DB324F");
  }

  return {
    datasets: [
      {
        ...data.datasets[0],
        backgroundColor: [gradient]
      }
    ]
  };
};

export default function Device({ device, onMoreInfoClick }) {
  const [lastUpdateMessage, setLastUpdateMessage] = useState("");

  const { _id, name, product, currentWeight, maxWeight } = device;

  const status = maxWeight && ((currentWeight / maxWeight) * 100).toFixed(0);

  useEffect(() => {
    API.get(`measure/${_id}`).then(measure => {
      const message = measure ? formatLastUpdateMessage(measure.date) : "Never updated yet";

      setLastUpdateMessage(message);
    });
  }, []);

  const renderStatus = status => {
    return status ? (
      <div className="with-bg">
        <div className="device-col-content">{status}</div>
        <div className="device-col-bg">
          <Doughnut
            height={10}
            width={35}
            options={{
              cutoutPercentage: 75,
              legend: {
                display: false
              },
              tooltips: {
                enabled: false
              }
              }}
            data={canvas =>
              renderDataWithGradient(
                {
                  datasets: [{ data: [status, 100 - status], borderWidth: 0 }]
                },
                canvas
              )
            }
          />
        </div>
      </div>
    ) : (
      "-"
    );
  };

  return (
    <div className="device-row">
      <div className="device-col">{name}</div>
      <div className="device-col">{product.name}</div>
      <div className="device-col">{renderStatus(status)}</div>
      <div className="device-col">{currentWeight}</div>
      <div className="device-col to-right">{lastUpdateMessage}</div>
      <div className="device-col">
        <HighlightButton
          title="More details"
          className="device-col-button"
          onClick={onMoreInfoClick}
        />
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";

import { API } from "helpers/index";
import Device from "components/MyDevices/Device.jsx";
import DeviceInfoPanel from "components/MyDevices/DeviceInfoPanel.jsx";
import EditDevicePanel from "components/MyDevices/EditDevicePanel.jsx";
import Loader from "components/Loader.jsx";

export default function MyDevices() {
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [isInfoPanelOpen, setInfoPanelOpen] = useState(false);
  const [isEditMode, setEditMode] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const getAllDevices = () => {
    API.get("device")
      .then(data => {
        setDevices(data);
      })
      .finally(() => setLoading(false));
  };

  const handleClose = () => {
    setInfoPanelOpen(false);
  };

  const handleSave = device => {
    setLoading(true);

    API.patch(`device/${device._id}`, device).then(() => {
      getAllDevices();

      setSelectedDevice(device);
      setEditMode(false);
      setInfoPanelOpen(false);
    });
  };

  const renderSidePanel = () => {
    switch (true) {
      case isLoading:
        return <Loader className="d-flex justify-content-center device-info-loader" />;
      case isEditMode:
        return (
          <EditDevicePanel
            device={selectedDevice}
            onSaveClick={handleSave}
            onCloseClick={handleClose}
          />
        );
      default:
        return (
          <DeviceInfoPanel
            device={selectedDevice}
            onEditClick={() => {
              setEditMode(true);
            }}
            onCloseClick={handleClose}
          />
        );
    }
  };

  useEffect(getAllDevices, []);

  useEffect(() => {
    if (!isInfoPanelOpen) {
      setEditMode(false);
    }
  }, [isInfoPanelOpen]);

  return (
    <div id="devices" className="devices">
      <div className="content main">
        <Row>
          <Col xs={12}>
            <h4 className="title">Your devices</h4>
            {isLoading ? (
              <Loader className="d-flex justify-content-center" />
            ) : (
              <div className="devices-table">
                <div className="headings">
                  <div className="heading-col">Name</div>
                  <div className="heading-col">Product</div>
                  <div className="heading-col">Status (%)</div>
                  <div className="heading-col">Current weight (grams)</div>
                  <div className="heading-col to-right">Last updated</div>
                  <div className="heading-col"></div>
                </div>
                {devices.map(device => (
                  <Device
                    device={device}
                    key={device._id}
                    onMoreInfoClick={() => {
                      setInfoPanelOpen(true);
                      setSelectedDevice(device);
                    }}
                  />
                ))}
              </div>
            )}
          </Col>
        </Row>
      </div>
      <div className={`device-info ${isInfoPanelOpen || "is-closed"}`}>
        <div className="device-info-container">{selectedDevice && renderSidePanel()}</div>
      </div>
    </div>
  );
}

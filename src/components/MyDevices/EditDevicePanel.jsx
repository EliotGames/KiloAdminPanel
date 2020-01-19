import React, { useState } from "react";

import EditText from "./EditText.jsx";
import HighlightButton from "components/HighlightButton.jsx";

export default function EditDevicePanel({ device: initialDevice, onCloseClick, onSaveClick }) {
  const [device, setDevice] = useState(initialDevice);

  const handleChange = e => {
    const { name, value } = e.target;

    if (name.indexOf(".") !== -1) {
      const [objName, subObjName] = name.split(".");

      return setDevice({
        ...device,
        [objName]: { ...device[objName], [subObjName]: value }
      });
    }

    setDevice({
      ...device,
      [name]: value
    });
  };

  return (
    <div className="edit-form">
      <div className="edit-form-headline">Edit KiLo</div>
      <EditText label="Name" name="name" type="text" value={device.name} onChange={handleChange} />
      <EditText
        label="Product"
        name="product.name"
        placeholder="i.e Fresh orange juice"
        value={device.product && device.product.name}
        onChange={handleChange}
        isOptional
      />
      <EditText
        label="Product type"
        name="product.type"
        placeholder="i.e Liquid"
        value={device.product && device.product.type}
        onChange={handleChange}
        isOptional
      />
      <div className="d-flex align-items-center">
        <EditText
          label="Maximum product weight"
          name="maxWeight"
          type="number"
          sideLabel="grams"
          placeholder="i.e 6000"
          value={device.maxWeight}
          onChange={handleChange}
          width={85}
          isOptional
        />
        <HighlightButton
          className="edit-form-button"
          title="Use current weight"
          onClick={() => {
            setDevice({ ...device, maxWeight: device.currentWeight });
          }}
        />
      </div>
      <div className="d-flex align-items-center">
        <EditText
          label="Tare weight"
          name="zeroWeight"
          type="number"
          placeholder="i.e 330"
          sideLabel="grams"
          value={device.zeroWeight}
          onChange={handleChange}
          width={85}
          isOptional
        />
        <HighlightButton
          className="edit-form-button"
          title="Use current weight"
          onClick={() => {
            setDevice({ ...device, zeroWeight: device.currentWeight });
          }}
        />
      </div>
      <div className="edit-icon" onClick={() => onSaveClick(device)}>
        <i className="now-ui-icons ui-1_check"></i>
      </div>
      <div className="close-icon" onClick={onCloseClick}>
        <i className="now-ui-icons ui-1_simple-remove"></i>
      </div>
    </div>
  );
}

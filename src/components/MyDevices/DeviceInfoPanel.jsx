import React from "react";
import { Link } from "react-router-dom";

import HighlightButton from "components/HighlightButton.jsx";

export default function DeviceInfo({ device, onCloseClick, onEditClick }) {
  const { name, product, currentWeight, maxWeight, zeroWeight } = device;

  return (
    <div className="info-form">
      <div className="info-form-headline">KiLo Info</div>

      <div className="info-form-label">Name</div>
      <div className="info-form-title">{name}</div>
      <div className="info-form-label">Current weight</div>
      <div className="info-form-field">{currentWeight} grams</div>
      {!!product && (
        <React.Fragment>
          <div className="info-form-label">Product</div>
          <div className="info-form-field">{product.name}</div>
        </React.Fragment>
      )}
      {!!(product && product.type) && (
        <React.Fragment>
          <div className="info-form-label">Product type</div>
          <div className="info-form-field">{product.type}</div>
        </React.Fragment>
      )}
      {!!maxWeight && (
        <React.Fragment>
          <div className="info-form-label">Maximum product weight</div>
          <div className="info-form-field">{maxWeight} grams</div>
        </React.Fragment>
      )}
      {!!zeroWeight && (
        <React.Fragment>
          <div className="info-form-label">Tare weight</div>
          <div className="info-form-field">{zeroWeight} grams</div>
        </React.Fragment>
      )}
      <Link to="/admin/statistics">
        <HighlightButton title="Show statistics" className="info-form-stats-button" />
      </Link>
      <div className="edit-icon" onClick={onEditClick}>
        <i className="now-ui-icons design-2_ruler-pencil"></i>
      </div>
      <div className="close-icon" onClick={onCloseClick}>
        <i className="now-ui-icons ui-1_simple-remove"></i>
      </div>
    </div>
  );
}

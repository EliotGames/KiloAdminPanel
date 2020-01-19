import React from "react";

export default function EditText({
  name,
  label,
  sideLabel,
  isOptional,
  className,
  fontSize,
  width,
  type,
  ...restProps
}) {
  const inputStyle = {
    fontSize
  };

  if (width) {
    inputStyle.maxWidth = `${width}px`;
  }

  return (
    <div className="edit-form-item">
      <div className={`${className || "edit-form-label"}`}>
        {label} {isOptional ? <span className="optional-label">(optional)</span> : ""}
      </div>
      <div className="d-flex">
        <input
          name={name}
          className="edit-form-input"
          style={inputStyle}
          type={type || "text"}
          {...restProps}
        />
        {sideLabel && <div className="side-label">{sideLabel}</div>}
      </div>
    </div>
  );
}

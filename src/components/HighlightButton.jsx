import React from "react";

export default function HighlightButton({ title, className, onClick }) {
  return (
    <div className={className}>
      <div className="highlight-button" onClick={onClick}>
        {title}
      </div>
    </div>
  );
}

import React from "react";

export default function Loader({ className }) {
  return (
    <div className={className}>
      <div class="lds-dual-ring"></div>
    </div>
  );
}

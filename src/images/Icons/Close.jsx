import React from "react";

const CloseIcon = ({ color = "#000000", width = 24, height = 24 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CloseIcon;

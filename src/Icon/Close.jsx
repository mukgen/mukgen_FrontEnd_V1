import React, { useState } from "react";

function Close({ closeModal }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 36 36"
      fill="none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "pointer" }}
      onClick={closeModal} // 호출될 함수를 전달
    >
      <rect
        width="36"
        height="36"
        rx="18"
        fill={hovered ? "#F5F6F6" : "transparent"}
      />
      <path
        d="M10 10L26 26M10 26L26 10"
        stroke="#C9CAD0"
        stroke-width="1.71429"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
export default Close;

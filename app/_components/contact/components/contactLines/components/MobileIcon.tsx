import React from "react";

const MobileIcon = () => {
  const cls_1 = {
    fill: "none",
    strokeWidth: "2px",
  };
  return (
    <div className="main_contact_contactLines_item_icon">
      <svg viewBox="0 0 32 32">
        <rect
          style={cls_1}
          className="cls-1"
          height="30"
          rx="2"
          ry="2"
          width="18"
          x="7"
          y="1"
        />
        <line style={cls_1} x1="15" x2="17" y1="27" y2="27" />
        <path style={cls_1} d="M20,1V3a2,2,0,0,1-2,2H14a2,2,0,0,1-2-2V1" />
      </svg>
    </div>
  );
};

export default MobileIcon;

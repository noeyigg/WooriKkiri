import React from "react";
/** 좌석 컴포넌트 */

const baseStyleClass =
  "w-14 h-14 border rounded flex items-center justify-center text-sm font-medium";

const SeatBox = ({ onClick, enabled, name = "" }) => {
  return (
    <div
      onClick={onClick}
      className={`${baseStyleClass} ${onClick ? "cursor-pointer" : ""}
    ${
      enabled
        ? `bg-blue-100 border-blue-300 text-blue-800 ${
            onClick && "hover:bg-blue-200"
          }`
        : "bg-gray-300 border-gray-400 text-gray-500 line-through cursor-not-allowed"
    }
    `}
    >
      {name}
    </div>
  );
};

export default SeatBox;

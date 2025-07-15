import { useState } from "react";
import { defaultSeatList } from "../../contants/MOCK_DATA";

const ROWS = 5;
const COLS = 8;

const SeatLayout = () => {
  const [seatList, setSeatList] = useState(defaultSeatList);

  // 좌석이 활성 상태인지 확인
  const isSeatEnabled = (row, col) =>
    seatList.some((seat) => seat[0] === row && seat[1] === col);

  // 좌석 클릭 시 활성/비활성 토글
  const handleAbleSeat = (row, col) => {
    const index = seatList.findIndex(
      (seat) => seat[0] === row && seat[1] === col
    );

    const updated = [...seatList];

    if (index !== -1) {
      updated.splice(index, 1);
    } else {
      // 없으면 추가
      updated.push([row, col]);
    }

    setSeatList(updated);
    console.log(updated);
  };

  return (
    <div className="grid grid-cols-8 gap-2 p-4">
      {Array.from({ length: ROWS }).map((_, row) =>
        Array.from({ length: COLS }).map((_, col) => {
          const enabled = isSeatEnabled(row, col);

          return (
            <div
              key={`${row}-${col}`}
              onClick={() => handleAbleSeat(row, col)}
              className={`w-14 h-14 border rounded flex items-center justify-center text-sm font-medium cursor-pointer
                ${
                  enabled
                    ? "bg-blue-100 border-blue-300 text-blue-800 hover:bg-blue-200"
                    : "bg-gray-300 border-gray-400 text-gray-500 line-through cursor-not-allowed"
                }
              `}
            >
              {row},{col}
            </div>
          );
        })
      )}
    </div>
  );
};

export default SeatLayout;

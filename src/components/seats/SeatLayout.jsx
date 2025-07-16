import { useContext, useState } from "react";
import { SeatContext } from "../../contexts/SeatProvider";
import SeatBox from "./SeatBox";

const ROWS = 5;
const COLS = 8;

// 좌석이 활성 상태인지 확인
export const isSeatEnabled = (seatList, row, col) =>
  seatList.some((seat) => seat[0] === row && seat[1] === col);

const SeatLayout = () => {
  const { seatList, setSeatList } = useContext(SeatContext);

  // 좌석 클릭 시 활성/비활성
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
  };

  return (
    <div className="grid grid-cols-8 gap-2 p-4">
      {Array.from({ length: ROWS }).map((_, row) =>
        Array.from({ length: COLS }).map((_, col) => {
          const enabled = isSeatEnabled(seatList, row, col);

          return (
            <SeatBox
              key={`${row}-${col}`}
              onClick={() => handleAbleSeat(row, col)}
              enabled={enabled}
            />
          );
        })
      )}
    </div>
  );
};

export default SeatLayout;

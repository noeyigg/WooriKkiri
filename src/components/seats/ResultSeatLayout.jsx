import { useState } from "react";

const ROWS = 5;
const COLS = 8;

const ResultSeatLayout = ({ assignedStudents }) => {
  const getStudentAtSeat = (row, col) => {
    return assignedStudents.find(
      (student) => student.seat[0] === row && student.seat[1] === col
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[40px] mt-[20px] mb-[10px] text-inherit rounded-[10px] text-[#555555] bg-[#e9ecef] flex justify-center items-center">
        칠판
      </div>
      <div className="grid grid-cols-8 gap-2 p-4">
        {Array.from({ length: ROWS }).map((_, row) =>
          Array.from({ length: COLS }).map((_, col) => {
            const student = getStudentAtSeat(row, col);
            const enabled = !!student;
            return (
              <div
                key={`${row}-${col}`}
                className={`w-20 h-20 border rounded flex items-center justify-center text-sm font-medium cur
                ${
                  enabled
                    ? "bg-blue-100 border-blue-300 text-blue-800"
                    : "bg-gray-300 border-gray-400 text-gray-500 line-through"
                }
                  `}
              >
                {enabled ? student.name : ""}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ResultSeatLayout;

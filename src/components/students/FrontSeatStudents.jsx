import React from "react";

import { useStudents } from "../../contexts/StudentContext";

import StudentsName from "./StudentsName";

const FrontSeatStudents = () => {
  const studentsList = useStudents().data.filter((student) => student.isFront);

  return (
    <div className="bg-blue-200 p-2 mt-3">
      <p className="text-sm font-bold mb-1 p-2">앞 2줄에 앉을 학생 지정</p>
      <div
        className={`rounded-xl border border-gray-400 p-2 ${
          studentsList.length === 0 ? "h-16" : "h-auto"
        }`}
      >
        {studentsList.map((student) => (
          <StudentsName student={student} key={student.id} />
        ))}
      </div>
    </div>
  );
};

export default FrontSeatStudents;

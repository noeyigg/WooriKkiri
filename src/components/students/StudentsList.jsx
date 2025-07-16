import React from "react";
import { useStudents } from "../../contexts/StudentContext";
import StudentsName from "./StudentsName";

const StudentsList = () => {
  const studentsList = useStudents().data;

  return (
    <div className="border border-blue-200 p-2">
      <p className="text-center text-sky-600 text-sm font-bold mb-1">이름</p>
      {studentsList.map((student) => (
        <StudentsName student={student} key={student.id} />
      ))}
    </div>
  );
};

export default StudentsList;

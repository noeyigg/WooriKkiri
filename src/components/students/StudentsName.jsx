import React from "react";
import { useStudentsDispatch } from "../../contexts/StudentContext";

const StudentsName = ({ student }) => {
  const dispatch = useStudentsDispatch();

  const handleClick = () => {
    dispatch({ type: "TOGGLE_ISFRONT", id: student.id });
  };

  return (
    <button
      onClick={handleClick}
      key={student.id}
      className={`p-1 m-0.5 bg-white rounded-full shadow-md text-center leading-loose cursor-pointer border ${
        student.isFront ? "border-sky-600" : "border-gray-200"
      }`}
    >
      {student.name}
    </button>
  );
};

export default StudentsName;

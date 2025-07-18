import { createContext, useContext, useReducer } from "react";

// 더미 학생 데이터
const dummyStudents = [
  { id: 0, name: "강상택", isFront: false },
  { id: 1, name: "권정주", isFront: false },
  { id: 2, name: "김민영", isFront: false },
  { id: 3, name: "김성은", isFront: false },
  { id: 4, name: "김영재", isFront: false },
  { id: 5, name: "김윤미", isFront: false },
  { id: 6, name: "김윤서", isFront: false },
  { id: 7, name: "김종민", isFront: false },
  { id: 8, name: "김현진", isFront: false },
  { id: 9, name: "김효민", isFront: false },
  { id: 10, name: "남기연", isFront: true },
  { id: 11, name: "문원규", isFront: true },
  { id: 12, name: "민택기", isFront: true },
  { id: 13, name: "박민서", isFront: true },
  { id: 14, name: "박준상", isFront: true },
  { id: 15, name: "배준혁", isFront: false },
  { id: 16, name: "배효정", isFront: false },
  { id: 17, name: "사혜빈", isFront: false },
  { id: 18, name: "신경남", isFront: false },
  { id: 19, name: "신수연", isFront: false },
  { id: 20, name: "양유진", isFront: false },
  { id: 21, name: "양은서", isFront: false },
  { id: 22, name: "양채연", isFront: false },
  { id: 23, name: "양현정", isFront: false },
  { id: 24, name: "오지영", isFront: false },
  { id: 25, name: "이영은", isFront: false },
  { id: 26, name: "이의섭", isFront: false },
  { id: 27, name: "이정복", isFront: false },
  { id: 28, name: "이제용", isFront: false },
  { id: 29, name: "이종혁", isFront: false },
  { id: 30, name: "임건애", isFront: false },
  { id: 31, name: "정용준", isFront: false },
  { id: 32, name: "조원희", isFront: false },
  { id: 33, name: "주민경", isFront: false },
  { id: 34, name: "박소희", isFront: false },
];

// 학생 데이터를 제공하는 컨텍스트
export const StudentContext = createContext();
export const StudentDispatchContext = createContext();

export const StudentProvider = ({ children }) => {
  const [studentsList, dispatch] = useReducer(reducer, { data: dummyStudents });

  return (
    <StudentContext.Provider value={studentsList}>
      <StudentDispatchContext.Provider value={dispatch}>
        {children}
      </StudentDispatchContext.Provider>
    </StudentContext.Provider>
  );
};

export const useStudents = () => useContext(StudentContext);
export const useStudentsDispatch = () => useContext(StudentDispatchContext);

const reducer = (students, action) => {
  const { data } = students;

  switch (action.type) {
    case "ADD_STUDENT": {
      const { newStudent } = action;
      return { data: [...data, newStudent] };
    }

    case "REMOVE_STUDENT": {
      const { id } = action;
      const removedStuents = data.filter((student) => student.id !== id);
      return { data: removedStuents };
    }

    case "TOGGLE_ISFRONT": {
      const { id } = action;
      const toggledStudents = data.map((student) =>
        student.id === id ? { ...student, isFront: !student.isFront } : student
      );
      return { data: toggledStudents };
    }
  }
};

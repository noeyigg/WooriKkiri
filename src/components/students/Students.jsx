import { StudentProvider } from "../../contexts/StudentContext";
import CardLayout from "../../layouts/CardLayout";
import StudentsList from "./StudentsList";
import FrontSeatStudents from "./FrontSeatStudents";

const Students = () => {
  return (
    <StudentProvider>
      <CardLayout title={"학생 설정"}>
        <StudentsList />
        <FrontSeatStudents />
      </CardLayout>
    </StudentProvider>
  );
};

export default Students;

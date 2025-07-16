import CardLayout from "../../layouts/CardLayout";
import StudentsList from "./StudentsList";
import FrontSeatStudents from "./FrontSeatStudents";

const Students = () => {
  return (
    <CardLayout title={"학생 설정"}>
      <StudentsList />
      <FrontSeatStudents />
    </CardLayout>
  );
};

export default Students;

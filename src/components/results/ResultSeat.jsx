import { useContext, useState } from "react";
import ResultSeatLayout from "../seats/ResultSeatLayout";
import { randomSeat } from "./randomSeat";
import RandomBtn from "../common/RandomBtn";
import { useStudents } from "../../contexts/StudentContext";
import { SeatContext } from "../../contexts/SeatProvider";
import CardLayout from "../../layouts/CardLayout";

const ResultSeat = () => {
  const [assignedStudents, setAssignedStudents] = useState([]);

  const studentList = useStudents().data;
  const { seatList } = useContext(SeatContext);

  // 자리 무작위 배열 함수
  const handleRandomSeat = () => {
    const assigned = randomSeat(studentList, seatList);
    setAssignedStudents(assigned);
  };

  return (
    <CardLayout title={"배치 결과"}>
      <div className="border border-[#e9ecef] rounded-[15px] shadow-md flex flex-col">
        <div className="flex items-center justify-center h-25">
          <RandomBtn onClick={handleRandomSeat} />
        </div>
        {/* <Title title={"자리 배치 결과"} /> */}
        <div className="pt-[30px] pr-[15px] pb-[15px] pl-[30px]">
          <ResultSeatLayout assignedStudents={assignedStudents} />
        </div>
      </div>
    </CardLayout>
  );
};

export default ResultSeat;

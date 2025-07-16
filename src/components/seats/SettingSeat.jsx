/**  자리 설정 */

import React, { useContext } from "react";
import SeatLayout from "./SeatLayout";
import { SeatContext } from "../../contexts/SeatProvider";
import CardLayout from "../../layouts/CardLayout";

const SettingSeat = () => {
  const { seatList } = useContext(SeatContext);
  return (
    <CardLayout title={"자리 설정"}>
      <div>
        <SeatLayout />
        <div className="border-t border-gray-200 p-5 text-center">
          <div className="font-bold text-sm">
            활성화된 자리 : {seatList.length}
          </div>
        </div>
      </div>
    </CardLayout>
  );
};

export default SettingSeat;

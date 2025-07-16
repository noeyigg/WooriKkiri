import React, { createContext, useState } from "react";
import { defaultSeatList } from "../contants/MOCK_DATA";

export const SeatContext = createContext();

const SeatProvider = ({ children }) => {
  const [seatList, setSeatList] = useState(defaultSeatList);
  return (
    <SeatContext.Provider value={{ seatList, setSeatList }}>
      {children}
    </SeatContext.Provider>
  );
};

export default SeatProvider;

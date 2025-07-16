import ResultSeat from "./components/results/ResultSeat";
import SettingSeat from "./components/seats/SettingSeat";
import Students from "./components/students/Students";
import SeatProvider from "./contexts/SeatProvider";
import { StudentProvider } from "./contexts/StudentContext";

function App() {
  return (
    <div className="flex">
      <SeatProvider>
        <SettingSeat />
        <StudentProvider>
          <Students />
          <ResultSeat />
        </StudentProvider>
      </SeatProvider>
    </div>
  );
}

export default App;

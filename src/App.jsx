import CelebrationLottie from "./components/common/CelebrationLottie";
import ResultSeat from "./components/results/ResultSeat";
import SettingSeat from "./components/seats/SettingSeat";
import Students from "./components/students/Students";
import { LottieProvider } from "./contexts/LottieProvider";
import SeatProvider from "./contexts/SeatProvider";
import { StudentProvider } from "./contexts/StudentContext";

function App() {
  return (
    <div className="flex">
      <LottieProvider>
        <SeatProvider>
          <SettingSeat />
          <StudentProvider>
            <Students />
            <ResultSeat />
          </StudentProvider>
        </SeatProvider>
        <CelebrationLottie />
      </LottieProvider>
    </div>
  );
}

export default App;

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ResultSeat from "./components/results/ResultSeat";
import SettingSeat from "./components/seats/SettingSeat";
import Students from "./components/students/Students";
import SeatProvider from "./contexts/SeatProvider";
import { StudentProvider } from "./contexts/StudentContext";

function App() {
  return (
    <DotLottieReact
      src="https://lottie.host/29373c04-9a05-4a12-8b2d-86cda0c082aa/x0ci3AbDhW.lottie"
      autoplay
    />
  );
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

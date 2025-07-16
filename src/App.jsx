import CelebrationLottie from "./components/common/CelebrationLottie";
import ResultSeat from "./components/results/ResultSeat";
import SettingSeat from "./components/seats/SettingSeat";
import Students from "./components/students/Students";
import { LottieProvider } from "./contexts/LottieProvider";
import SeatProvider from "./contexts/SeatProvider";
import { StudentProvider } from "./contexts/StudentContext";
import Logo from "./components/assets/logo.png";

function App() {
  return (
    <>
      <header className="bg-white flex">
        <div className="mx-auto">
          <div className="flex items-center">
            <img src={Logo} alt="우리끼리 로고" className="w-70 mr-3" />
          </div>
        </div>
      </header>
      <LottieProvider>
        <SeatProvider>
          <StudentProvider>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 m-6">
              <SettingSeat />
              <Students />
            </div>
            <div className="m-6">
              <ResultSeat />
            </div>
          </StudentProvider>
        </SeatProvider>
        <CelebrationLottie />
      </LottieProvider>
    </>
  );
}

export default App;

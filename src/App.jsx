import SeatLayout from "./components/seats/SeatLayout";
import SeatProvider from "./contexts/SeatProvider";
import CardLayout from "./layouts/CardLayout";

function App() {
  return (
    <>
      <SeatProvider>
        <h1>우리끼리 자리 정하기</h1>
        <CardLayout title={"자리설정"}>
          <SeatLayout type="SETTING" />
        </CardLayout>
        <CardLayout title={"결과"}>
          <SeatLayout type="RESULT" />
        </CardLayout>
      </SeatProvider>
    </>
  );
}

export default App;

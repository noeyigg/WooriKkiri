export const randomSeat = (studentList, seatList) => {
  const sortedSeatList = [...seatList].sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1]; // 같은 row면 col 오름차순
    return a[0] - b[0]; // row 오름차순
  });

  // 앞자리 선호/비선호 분류
  const true_students = studentList.filter((s) => s.isFront === true);
  const false_students = studentList.filter((s) => s.isFront === false);

  // 앞자리 구역 설정(1,2행 구역)
  const frontZone = sortedSeatList.filter(
    ([row, col]) => row === 0 || row === 1
  );

  // 앞자리 선호 학생을 무작위 배열
  for (let i = true_students.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [true_students[i], true_students[j]] = [true_students[j], true_students[i]];
  }

  // 앞자리 무작위 배열
  const frontSeats = [...frontZone];
  for (let i = frontSeats.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [frontSeats[i], frontSeats[j]] = [frontSeats[j], frontSeats[i]];
  }

  // 앞자리 선호 학생에게 앞자리 부여
  const assignedTrue = true_students.map((student, index) => ({
    ...student,
    seat: frontSeats[index],
  }));

  // 사용된 자리와 남아있는 자리 비교
  const usedSeats = assignedTrue.map((s) => JSON.stringify(s.seat));
  const remainingSeats = sortedSeatList.filter(
    (seat) => !usedSeats.includes(JSON.stringify(seat))
  );

  // 남은 학생 무작위 배열
  for (let i = false_students.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [false_students[i], false_students[j]] = [
      false_students[j],
      false_students[i],
    ];
  }

  // 남은 학생에게 자리 부여
  const assignedFalse = false_students.map((student, index) => ({
    ...student,
    seat: remainingSeats[index],
  }));

  const assigned = [...assignedTrue, ...assignedFalse];
  //   for (let i = 0; i < assigned.length; i++) {
  //     console.log(assigned[i]);
  //   }
  return assigned;
};

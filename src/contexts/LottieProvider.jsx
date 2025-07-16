/** 로티 실행을 제어하는 */

import React, { createContext, useEffect, useState } from "react";

export const LottieContext = createContext(null);

export const LottieProvider = ({ children }) => {
  const [lottiePlayer, setLottiePlayer] = useState(null);
  const [isReady, setIsReady] = useState(false);

  // lottiePlayer 가 할당 되었을 때 실행될 수 있도록 검사하는 부분
  useEffect(() => {
    if (lottiePlayer) {
      lottiePlayer.addEventListener("ready", () => {
        setIsReady(true);
      });
    }
  }, [lottiePlayer]);

  const handlePlay = () => {
    if (lottiePlayer && isReady) {
      lottiePlayer.play();
      console.log("Lottie 실행");
    } else {
      console.log("Lottie 준비 안됨");
    }
  };

  return (
    <LottieContext.Provider
      value={{ lottiePlayer, setLottiePlayer, handlePlay }}
    >
      {children}
    </LottieContext.Provider>
  );
};

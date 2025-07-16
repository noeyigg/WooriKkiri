import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React, { useContext } from "react";
import { LottieContext } from "../../contexts/LottieProvider";

const CelebrationLottie = () => {
  const { setLottiePlayer } = useContext(LottieContext);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <DotLottieReact
        src="https://lottie.host/29373c04-9a05-4a12-8b2d-86cda0c082aa/x0ci3AbDhW.lottie"
        autoplay={false}
        loop={false}
        dotLottieRefCallback={(player) => setLottiePlayer(player)}
        className="w-full h-full"
      />
    </div>
  );
};

export default CelebrationLottie;

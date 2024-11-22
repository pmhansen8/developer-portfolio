"use client";

import Lottie from "lottie-react";

const AnimationLottie = ({ animationData, width = "95%" }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData, // Pass the actual animation JSON object here
    style: {
      width,
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;

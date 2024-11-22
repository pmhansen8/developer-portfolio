"use client";

import React from "react";
import Lottie from "lottie-react";
import codeAnimation from "/public/lottie/code.json"; // Ensure the path is correct

const AnimationLottie = ({ width = "95%" }) => {
    return (
        <Lottie
            loop
            autoplay
            animationData={codeAnimation}
            style={{ width }}
        />
    );
};

export default AnimationLottie;

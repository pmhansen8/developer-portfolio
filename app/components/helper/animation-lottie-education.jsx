"use client";

import React from "react";
import Lottie from "lottie-react";
import codeAnimation from "/public/lottie/code.json";
import studyAnimation from "/public/lottie/study.json";

const animations = {
    code: codeAnimation,
    study: studyAnimation,
};

const AnimationLottie = ({ animationName = "study", width = "95%" }) => {
    const animationData = animations[animationName];

    return (
        <Lottie
            loop
            autoplay
            animationData={animationData}
            style={{ width }}
        />
    );
};

export default AnimationLottie;

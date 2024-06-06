'use client';

import { memo } from "react";

import { useLottie, useLottieInteractivity } from "lottie-react";

import animation from '@/assets/animation.json';
import Center from "@/ui/center";

const options = {
  animationData: animation,
};

const style = {
  height: 650,
};

function AnimationConfig() {
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'scroll',
    actions: [
      {
        visibility: [0.4, 0.9],
        type: 'seek',
        frames: [0, 150],
      },
    ],
  });

  return Animation;
}

function ScrollAnim() {
  return (
    <Center>
      <AnimationConfig />
    </Center>
  );
}

export default memo(ScrollAnim);


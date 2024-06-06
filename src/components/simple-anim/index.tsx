'use client';

import { memo, useRef, useState } from "react";

import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animation from '@/assets/animation.json';
import Center from "@/ui/center";

function SimpleAnim() {
  const [iterations, setIterations] = useState(0);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const lottieToggleCount = useRef(0);

  const handleToggleAnimation = () => {
    if (lottieToggleCount.current % 2 !== 0) lottieRef.current?.play();
    else lottieRef.current?.pause();

    lottieToggleCount.current++;
  };

  return (
    <Center>
      <div className="flex flex-col gap-y-4">
        <Lottie
          lottieRef={lottieRef}
          onLoopComplete={() => setIterations(iterations + 1)}
          animationData={animation}
        />
        <button
          className="border border-teal-500 cursor-pointer rounded px-5 py-2 hover:opacity-70 active:opacity-50"
          onClick={handleToggleAnimation}
          >
          Toggle
        </button>
        <p className="text-center">Iterations: {iterations}</p>
      </div>
    </Center>
  );
}

export default memo(SimpleAnim);
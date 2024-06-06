import React, { memo } from "react";

type TProps = {
  children: React.ReactNode;
};

function Center({ children }: TProps) {
  return (
    <div className="min-h-screen flex justify-center items-center lg:mx-48 text-white font-poppins">
      {children}
    </div>
  );
}

export default memo(Center);
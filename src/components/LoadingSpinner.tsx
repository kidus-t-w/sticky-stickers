import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="w-48 h-48 inline-block overflow-hidden bg-white relative">
      <div className="relative w-full h-full">
        <div
          className="absolute bg-red-400 w-7"
          style={{
            left: "35px",
            animation: "ldio-1 1s cubic-bezier(0,0.5,0.5,1) infinite",
            animationDelay: "-0.2s",
          }}
        />
        <div
          className="absolute bg-yellow-400 w-7"
          style={{
            left: "85px",
            animation: "ldio-2 1s cubic-bezier(0,0.5,0.5,1) infinite",
            animationDelay: "-0.1s",
          }}
        />
        <div
          className="absolute bg-green-400 w-7"
          style={{
            left: "135px",
            animation: "ldio-3 1s cubic-bezier(0,0.5,0.5,1) infinite",
          }}
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;

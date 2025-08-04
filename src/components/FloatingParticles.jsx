import React from "react";

const FloatingParticles = ({ count = 40 }) => {
  const particle = Array.from({ length: count }, () => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: Math.random() * 2 + 2,
  }));
  return (
    <div className=" absolute inset-0 overflow-hidden pointer-events-none">
      {particle.map((particle, index) => (
        <div
          key={index}
          className=" absolute w-1 h-1 bg-amber-400/40 rounded-full"
          style={{
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            animation: `float ${particle.duration}s infinite`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default FloatingParticles;

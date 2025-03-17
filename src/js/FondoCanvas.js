import React, { useRef, useEffect } from "react";

function FondoOlas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let time = 0;

    const drawWave = (amplitude, frequency, phase, color) => {
      ctx.beginPath();
      ctx.moveTo(
        0,
        canvas.height / 2 + amplitude * Math.sin(frequency * 0 + phase + time)
      );

      for (let x = 1; x < canvas.width; x++) {
        ctx.lineTo(
          x,
          canvas.height / 2 + amplitude * Math.sin(frequency * x + phase + time)
        );
      }

      ctx.strokeStyle = color;
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawWave(50, 0.01, 0, "rgba(255, 255, 255, 0.5)");
      drawWave(30, 0.02, Math.PI / 4, "rgba(200, 200, 255, 0.7)");
      drawWave(20, 0.03, Math.PI / 2, "rgba(150, 150, 255, 0.9)");

      time += 0.02;
      animationFrameId = requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      animate();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: "-1",
      }}
    />
  );
}

export default FondoOlas;

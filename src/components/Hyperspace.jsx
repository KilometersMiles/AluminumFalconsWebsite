// src/components/Hyperspace.js
import React, { useEffect, useRef, useState } from 'react';

export default function Hyperspace({ onComplete }) {
  const canvasRef = useRef(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Configuration
    const starCount = 400;
    const stars = [];
    let speed = 70; // Initial "Jump" speed

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create Star objects
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * canvas.width,
        px: 0,
        py: 0,
      });
    }

    const draw = () => {
      // Create a trailing effect by not fully clearing the previous frame
      ctx.fillStyle = 'rgba(5, 5, 6, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);

      stars.forEach((s) => {
        s.z -= speed;
        if (s.z <= 0) s.z = canvas.width;

        // Project 3D coordinates to 2D
        const x = s.x * (canvas.width / s.z);
        const y = s.y * (canvas.width / s.z);

        if (s.px !== 0) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${Math.min(
            1,
            1 - s.z / canvas.width
          )})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(s.px, s.py);
          ctx.stroke();
        }

        s.px = x;
        s.py = y;
      });

      ctx.restore();

      // Decelerate speed to simulate "dropping out" of hyperspace
      if (speed > 2) speed -= 0.5 * Math.log(speed) + 1;

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    // Fade out and remove component after 2.5 seconds
    const timer = setTimeout(() => {
      setOpacity(0);
      setTimeout(onComplete, 1000);
    }, 200);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        backgroundColor: '#050506',
        transition: 'opacity 1s ease-out',
        opacity: opacity,
        pointerEvents: 'none',
      }}
    />
  );
}

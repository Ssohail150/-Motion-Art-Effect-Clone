// src/components/ParallaxBackground.js
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CanvasContainer = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = (x, y) => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const gradient = context.createLinearGradient(0, 0, x, y);
      gradient.addColorStop(0, '#F87516');
      gradient.addColorStop(1, '#5E11FF');

      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
    };

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      draw(clientX, clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <CanvasContainer ref={canvasRef} />;
};

export default CanvasBackground;

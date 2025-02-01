"use client";
import React, { useEffect, useState } from "react";

function RadialGradient() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
      const mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);

      setMousePosition({ x: mouseXpercentage, y: mouseYpercentage });
    }; 

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const gradientStyle = {
    background: `radial-gradient(
      circle at ${mousePosition.x}% ${mousePosition.y}%,
      rgba(9, 13, 51, 0.8) 0%,
      rgba(44, 0, 22, 0.6) 50%,
      rgba(0, 0, 0, 0.2) 90%,
      rgba(0, 0, 0, 0) 100%
    )`,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none", // Ensures gradient doesn't interfere with interaction
    zIndex: -1, // Keeps gradient behind the content
  };

  return <div style={gradientStyle}></div>;
}

export default RadialGradient;

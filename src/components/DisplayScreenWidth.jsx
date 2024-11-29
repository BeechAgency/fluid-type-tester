import React, { useState, useEffect } from "react";

const ScreenWidthDisplay = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="screen-width-display"
    >
      <strong>Width:</strong> {screenWidth}px
    </div>
  );
};

export default ScreenWidthDisplay;

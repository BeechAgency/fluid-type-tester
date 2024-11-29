import React from 'react'
import { useState } from 'react'

export default function FluidTypeControls({ customCSS, setCustomCSS, applyCSS }) {
    const [ isHidden, setIsHidden ] = useState(false);

    const handleApplyCss = () => {
      applyCSS();
      setIsHidden(true);
    }
  return (
    <div className={`fluid-type-controls ${isHidden ? "hidden" : ""}`}>
      <div className="inner">
        <h1>Fluid Type Tester</h1>
        <p>
          Enter your custom CSS below, click "Apply", and see how it scales!
        </p>

        <textarea
          value={customCSS}
          onChange={(e) => setCustomCSS(e.target.value)}
          placeholder="Enter your CSS here..."
          style={{
            width: "100%",
            height: "100px",
            fontFamily: "monospace",
            marginBottom: "10px",
          }}
        />
        <div className="button-row">
          <button onClick={handleApplyCss} className="go-button">
            Apply CSS
          </button>

          <button
            onClick={() => setIsHidden(!isHidden)}
            className={`fluid-type-controls-toggle ${isHidden ? "hidden" : ""}`}
          >
            {isHidden ? "Show Controls" : "Hide Controls"}
          </button>
        </div>
      </div>
    </div>
  );
}

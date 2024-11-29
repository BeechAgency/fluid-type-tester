import React, { useState } from "react";
import FluidTypeControls from "./FluidTypeControls";
import DisplayScreenWidth from "./DisplayScreenWidth";

const FluidTypeTester = () => {
  const [customCSS, setCustomCSS] = useState("");

  const applyCSS = () => {
    const styleTag = document.getElementById("custom-styles");
    if (styleTag) {
      styleTag.textContent = customCSS;
    } else {
      const newStyleTag = document.createElement("style");
      newStyleTag.id = "custom-styles";
      newStyleTag.textContent = customCSS;
      document.head.appendChild(newStyleTag);
    }
  };

  return (
    <div>
      <FluidTypeControls
        customCSS={customCSS}
        setCustomCSS={setCustomCSS}
        applyCSS={applyCSS}
      />

      <DisplayScreenWidth />

      <section className="fluid-type">
        <h1>Heading 1 - Quick brown fox jumped over the lazy dog</h1>
        <h2>Heading 2 - Quick brown fox jumped over the lazy dog</h2>
        <h3>Heading 3 - Quick brown fox jumped over the lazy dog</h3>
        <h4>Heading 4 - Quick brown fox jumped over the lazy dog</h4>
        <h5>Heading 5 - Quick brown fox jumped over the lazy dog</h5>
        <h6>Heading 6 - Quick brown fox jumped over the lazy dog</h6>

        <p>
          This is a paragraph of text. It should reflect your fluid typography
          settings when the CSS is applied. This is a paragraph of text. It
          should reflect your fluid typography settings when the CSS is applied.
        </p>
        <p>
          Adjust the viewport size to see how the scaling changes dynamically.
        </p>

        <ul>
          <li>List item one</li>
          <li>List item two</li>
          <li>List item three</li>
        </ul>

        <p>
          This is a paragraph of text. It should reflect your fluid typography
          settings when the CSS is applied. This is a paragraph of text. It
          should reflect your fluid typography settings when the CSS is applied.
        </p>
      </section>
    </div>
  );
};

export default FluidTypeTester;

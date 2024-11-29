import React, { useState } from "react";
import FluidTypeControls from "./FluidTypeControls";
import DisplayScreenWidth from "./DisplayScreenWidth";

const FluidTypeTester = () => {
  const [customCSS, setCustomCSS] = useState("");
  const [ showNotification, setShowNotification ] = useState(false);

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

    setTimeout(() => {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    }, 100);
  };

  return (
    <div>
      <FluidTypeControls
        customCSS={customCSS}
        setCustomCSS={setCustomCSS}
        applyCSS={applyCSS}
      />

      <div className={`notification ${showNotification ? "show" : ""}`}>
        🎉 CSS APPLIED! 🎉
      </div>

      <DisplayScreenWidth />

      <section className="fluid-type">
        <h1 contentEditable suppressContentEditableWarning>
          Heading 1 - Quick brown fox jumped over the lazy dog
        </h1>
        <h2 contentEditable suppressContentEditableWarning>
          Heading 2 - Quick brown fox jumped over the lazy dog
        </h2>
        <h3 contentEditable suppressContentEditableWarning>
          Heading 3 - Quick brown fox jumped over the lazy dog
        </h3>
        <h4 contentEditable suppressContentEditableWarning>
          Heading 4 - Quick brown fox jumped over the lazy dog
        </h4>
        <h5 contentEditable suppressContentEditableWarning>
          Heading 5 - Quick brown fox jumped over the lazy dog
        </h5>
        <h6 contentEditable suppressContentEditableWarning>
          Heading 6 - Quick brown fox jumped over the lazy dog
        </h6>

        <p contentEditable suppressContentEditableWarning>
          This is a paragraph of text. It should reflect your fluid typography
          settings when the CSS is applied. This is a paragraph of text. It
          should reflect your fluid typography settings when the CSS is applied.
        </p>
        <p contentEditable suppressContentEditableWarning>
          Adjust the viewport size to see how the scaling changes dynamically.
        </p>

        <ul>
          <li contentEditable suppressContentEditableWarning>
            List item one
          </li>
          <li contentEditable suppressContentEditableWarning>
            List item two
          </li>
          <li contentEditable suppressContentEditableWarning>
            List item three
          </li>
        </ul>

        <p contentEditable suppressContentEditableWarning>
          This is a paragraph of text. It should reflect your fluid typography
          settings when the CSS is applied. This is a paragraph of text. It
          should reflect your fluid typography settings when the CSS is applied.
        </p>
      </section>
    </div>
  );
};

export default FluidTypeTester;

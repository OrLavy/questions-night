import React from "react";
// @ts-ignore
import TextTransition, { presets } from "react-text-transition";

import questions from "./assets/questions.json";
import { Asker } from "./asker/Asker";

function App() {
  return (
    <div style={{ height: "100%", position: "relative" }}>
      <div
        id={"centeredContainer"}
        style={{
          backgroundColor: "blue",
          position: "absolute",
          margin: "auto",
          width: "min(40rem, 90vmin)",
          height: "min(40rem, 90vmin)",
          right: 0,
          left: 0,
          top: 0,
          bottom: 0,
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Asker questions={questions} />
      </div>
    </div>
  );
}

export default App;

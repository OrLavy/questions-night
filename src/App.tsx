import React, { useState } from "react";
// @ts-ignore
import TextTransition, { presets } from "react-text-transition";

import questions from "./assets/questions.json";
import { Asker, TPlayerGist } from "./asker/Asker";
import { COLOR_TEXT_PRIMARY } from "./theme/themeConsts";
import { GameIntro } from "./gameIntro/GameIntro";
import OrikImg from "./assets/orik.jpg";
import OrikImg1 from "./assets/orik_1.jpg";
import LorikImg from "./assets/lorik.jpg";

const players: TPlayerGist[] = [
  {
    name: "Orik",
    imageSources: [OrikImg],
  },
  {
    name: "Lorik",
    imageSources: [LorikImg],
  },
];

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div
      style={{
        height: "100%",
        position: "relative",
        // backgroundColor: "#e00000",
        backgroundColor: "#990011",
      }}
    >
      <div
        id={"centeredContainer"}
        style={{
          backgroundColor: "rgba(0,0,0,0.4)",
          position: "absolute",
          margin: "auto",
          width: "min(40rem, 90vmin)",
          maxHeight: "min(40rem, 90vh)",
          right: 0,
          left: 0,
          top: 0,
          bottom: 0,
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: COLOR_TEXT_PRIMARY,
        }}
      >
        {gameStarted && <Asker questions={questions} players={players} />}

        {!gameStarted && <GameIntro startGame={() => setGameStarted(true)} />}
      </div>
    </div>
  );
}

export default App;

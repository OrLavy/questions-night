import React, { useCallback, useMemo, useState } from "react";
import { Button, Typography } from "@material-ui/core";
import { getRandomInt } from "../utils";
// @ts-ignore
import TextTransition, { presets } from "react-text-transition";
import { COLOR_TEXT_PRIMARY } from "../theme/themeConsts";
// @ts-ignore
import CrossfadeImage from "react-crossfade-image";
import { SpecialEffectsRow } from "./specialEffectsRow/SpecialEffectsRow";

export type TPlayerGist = {
  name: string;
  imageSources: string[];
};

type tFlags = {
  showSushi: boolean;
  showWasabi: boolean;
  showCoocktail: boolean;
};

interface IProps {
  questions: string[];
  players: TPlayerGist[];
}

export const Asker = React.memo<IProps>((props) => {
  const { questions, players } = props;

  const [changesCount, setChangesCount] = useState(1);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [playerIndex, setPlayerIndex] = useState(
    getRandomInt(0, players.length)
  );

  const newRandomQuestion = useCallback(() => {
    const newIndex = getRandomInt(0, questions.length);
    setQuestionIndex(newIndex);
  }, [questions.length]);

  const newRandomPlayer = useCallback(() => {
    const newIndex = getRandomInt(0, players.length);
    setPlayerIndex(newIndex);
  }, [players.length]);

  const flags = useMemo<tFlags>(() => {
    const newRand = getRandomInt(0, 10000);

    const fl: tFlags = {
      showCoocktail: changesCount % 2 === 0,
      showSushi: changesCount % 2 === 1,
      showWasabi: changesCount % 3 === 0,
    };

    return fl;
  }, [changesCount]);

  const randomAll = useCallback(() => {
    newRandomQuestion();
    newRandomPlayer();
    setChangesCount(changesCount + 1);
  }, [changesCount, newRandomPlayer, newRandomQuestion]);

  const imageIndex = getRandomInt(0, players[playerIndex].imageSources.length);

  return (
    <div
      style={{
        width: "min(30rem, 100%)",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "min(20rem, 100%)",
          justifySelf: "flex-start",
          marginBottom: "2rem",
        }}
      >
        <TextTransition
          text={
            <Typography variant={"h6"} style={{}}>
              {questions[questionIndex]}
            </Typography>
          }
          springConfig={presets.wobbly}
        />
      </div>
      <br />
      <br />
      <br />
      <Button
        variant={"outlined"}
        style={{
          color: COLOR_TEXT_PRIMARY,
          marginTop: "1em",
          borderColor: COLOR_TEXT_PRIMARY,
        }}
        onClick={randomAll}
      >
        New Question
      </Button>

      <br />
      <br />
      <CrossfadeImage
        src={players[playerIndex].imageSources[imageIndex]}
        style={{ width: "max(250, 50%)" }}
      />
      <br />
      <SpecialEffectsRow
        showCoocktail={flags.showCoocktail}
        showSushi={flags.showSushi}
        showWasabi={flags.showWasabi}
      />
      {/*<img src={players[playerIndex].imageSource} width={"200"} />*/}
    </div>
  );
});

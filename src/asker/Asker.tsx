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
    const newRand = getRandomInt(0, 100 + 1);

    const coocktailP = 50;
    const sushiP = 70;
    const wasabiP = 33;

    const fl: tFlags = {
      showCoocktail: getRandomInt(0, 100 + 1) <= coocktailP,
      showSushi: getRandomInt(0, 100 + 1) <= sushiP,
      showWasabi: getRandomInt(0, 100 + 1) <= wasabiP,
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
        padding: "0rem",
        paddingTop: "1rem",
        paddingBottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "min(20rem, 100%)",
          // justifySelf: "flex-start",
          marginBottom: "2rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          textAlign: "center",
        }}
      >
        <TextTransition
          style={{}}
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
      <br />
      <SpecialEffectsRow
        showCoocktail={flags.showCoocktail}
        showSushi={flags.showSushi}
        showWasabi={flags.showWasabi}
      />
      <br />
      <Button
        variant={"outlined"}
        size={"large"}
        style={{
          color: COLOR_TEXT_PRIMARY,
          marginTop: "1em",
          borderColor: COLOR_TEXT_PRIMARY,
        }}
        onClick={randomAll}
      >
        New Question ({changesCount})
      </Button>

      <br />
      <br />
      <CrossfadeImage
        src={players[playerIndex].imageSources[imageIndex]}
        style={{
          width: "min(250, 100%)",
          // height: 200,
          borderRadius: "3rem",
          // DEV_NOTE : This is because for some reason there are 3 pixels added to the bottom of the image
          // bottom: 0,
          // border: "30px solid black",
          boxSizing: "border-box",
        }}
      />
      {/*<img src={players[playerIndex].imageSource} width={"200"} />*/}
    </div>
  );
});

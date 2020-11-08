import React, { useCallback, useState } from "react";
import { Button, Typography } from "@material-ui/core";
import { getRandomInt } from "../utils";
// @ts-ignore
import TextTransition, { presets } from "react-text-transition";

interface IProps {
  questions: string[];
}

export const Asker = React.memo<IProps>((props) => {
  const { questions } = props;
  const [questionIndex, setQuestionIndex] = useState(0);

  const newRandomQuestion = useCallback(() => {
    const newIndex = getRandomInt(0, questions.length - 1);
    setQuestionIndex(newIndex);
  }, [questions.length]);

  return (
    <div style={{ width: "min(20rem, 100%)", padding: "1rem" }}>
      <TextTransition
        text={<Typography style={{}}>{questions[questionIndex]}</Typography>}
        springConfig={presets.wobbly}
      />
      <br />
      <br />
      <Button onClick={newRandomQuestion}>New Question</Button>
    </div>
  );
});

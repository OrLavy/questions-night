import React from "react";
import { Button, Typography } from "@material-ui/core";
import { COLOR_TEXT_PRIMARY } from "../theme/themeConsts";

interface IProps {
  startGame: () => void;
}

export const GameIntro = React.memo<IProps>((props) => {
  const { startGame } = props;
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
      <Typography variant={"h4"}>Welcome to O&L 2 years</Typography>
      <Button
        variant={"outlined"}
        style={{
          color: COLOR_TEXT_PRIMARY,
          marginTop: "1em",
          borderColor: COLOR_TEXT_PRIMARY,
        }}
        onClick={startGame}
      >
        Lets start !
      </Button>
    </div>
  );
});

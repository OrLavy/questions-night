import React from "react";
import { SvgIcon, Fade } from "@material-ui/core";
import { ReactComponent as SushiSvg } from "./icons/sushi.svg";
import { ReactComponent as WasabiSvg } from "./icons/wasabi.svg";
import { ReactComponent as CoocktailSvg } from "./icons/cocktail.svg";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

interface IProps {
  showSushi: boolean;
  showWasabi: boolean;
  showCoocktail: boolean;
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: "0.5rem",
    marginleft: "0.5rem",
  },
}));

const DURATION = 1000;

export const SpecialEffectsRow = React.memo<IProps>((props) => {
  const classes = useStyles();
  const { showCoocktail, showSushi, showWasabi } = props;
  console.log({ showWasabi });
  return (
    <div style={{ display: "flex" }}>
      <Fade in={showSushi} timeout={DURATION}>
        <SvgIcon
          className={clsx(classes.icon)}
          fontSize={"large"}
          component={SushiSvg}
          viewBox={"0 -45 511.99923 511"}
        />
      </Fade>
      <Fade in={showWasabi} timeout={DURATION}>
        <SvgIcon
          className={clsx(classes.icon)}
          fontSize={"large"}
          component={WasabiSvg}
          viewBox={"0 0 512 512"}
        />
      </Fade>
      <Fade in={showCoocktail} timeout={DURATION}>
        <SvgIcon
          className={clsx(classes.icon)}
          fontSize={"large"}
          component={CoocktailSvg}
          viewBox={"0 0 512 512"}
        />
      </Fade>
    </div>
  );
});

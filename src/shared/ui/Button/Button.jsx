import { getStyles } from "../../lib/getStyles";
import styles from "./Button.module.scss";

const COLOR_MAP = {
  blue: {
    raised: "blueRaised",
    filled: "blueFilled",
    outline: "blueOutline",
    subtle: "blueRaised",
    clear: "blueOutline",
  },
  grey: {
    raised: "greyRaised",
    filled: "greyFilled",
    outline: "greyOutline",
    subtle: "greyFilled",
    clear: "greyOutline",
  },
  dark: {
    raised: "darkRaised",
    filled: "darkFilled",
    outline: "darkOutline",
    subtle: "darkFilled",
    clear: "darkOutline",
  },

  pink: {
    raised: "pinkRaised",
    filled: "pinkFilled",
    outline: "pinkOutline",
    subtle: "pinkFilled",
    clear: "pinkOutline",
  },

  white: {
    raised: "whiteRaised",
    filled: "whiteFilled",
    outline: "whiteOutline",
    subtle: "whiteFilled",
    clear: "whiteOutline",
  },
};

const Button = (props) => {
  const {
    className,
    children,
    size = "large",
    color = "blue",
    variant = "filled",
    as = "button",
    href,
    fullWidth,
    noPadding, 
    ...otherProps
  } = props;

  // 👉 выбираем css-класс по цвету и варианту
  const resolvedColorClass = COLOR_MAP[color]?.[variant];

  const additional = [
    className,
    styles[size],
    styles[variant],
    resolvedColorClass ? styles[resolvedColorClass] : null
  ];

  const mods = {
    [styles.fullWidth]: fullWidth,
    [styles.noPadding]: noPadding,
  };

  const classes = getStyles(styles.button, mods, additional);

  if (as === "a") {
    return (
      <a className={classes} href={href} {...otherProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...otherProps}>
      {children}
    </button>
  );
};

export default Button;

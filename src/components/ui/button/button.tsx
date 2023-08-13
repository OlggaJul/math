import { FC, HTMLAttributes } from "react";

import styles from "./button.module.scss";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "light" | "dark";
  size?: "min";
}

//component
const Button: FC<Props> = ({ disabled, size, variant = "light", ...rest }) => {
  //return
  return (
    <button
      className={`${styles.button} ${size === "min" ? styles.min : ""} ${
        variant === "dark" ? styles.dark : ""
      } ${rest.className || ""} ${disabled ? styles.disabled : ""}`}
      {...rest}
    >
      <div className={styles.button__elements}>{rest.children}</div>
    </button>
  );
};
export default Button;

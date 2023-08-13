import { FC } from "react";
import styles from "./logo.module.scss";

const Logo: FC = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.logo__top}>
        <div className={styles.logo__text}>твій</div>
        <div className={styles.logo__ico}>on-line</div>
      </div>

      <div className={styles.logo__text}>репетитор</div>
    </div>
  );
};

export default Logo;

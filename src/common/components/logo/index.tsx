import * as React from "react";
import styles from "./index.module.scss";

export const Logo: React.FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <div className={styles.bar1} />
        <div className={styles.bar2} />
        <div className={styles.bar3} />
      </div>
      <div className={styles.textWrapper}>hyperforms</div>
    </div>
  );
};

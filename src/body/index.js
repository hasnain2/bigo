import React from "react";
import styles from "./body.module.css";
import { ReactComponent as Chevron } from "../assets/chevron-right-solid.svg";

function Body(props) {
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <p className={styles.mainStyles}>Unceasing innovation.</p>
        <p className={styles.mainStyles}>Preserving the natural world.</p>
        <p className={styles.bodyStyles}>
          Redsand Ventures is unlocking frontier markets through responsible
          capital. We work with industry players and funders to build bold
          projects where the innovation proves out both the return on investment
          and impact.
        </p>
        <div className={styles.whatWeDoContainer}>
          <div className={styles.chevronContainer}>
            <Chevron className={styles.chevronStyles} />
          </div>
          <div className={styles.whatWeDoTextContainer}>
            <p className={styles.whatWeDoStyles}>What We Do</p>
          </div>
        </div>
      </div>
      <div className={styles.endContainer}></div>
    </div>
  );
}

export default Body;

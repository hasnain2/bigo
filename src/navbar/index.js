import React, { useState } from "react";
import styles from "./navbar.module.css";
import IconImage from "../assets/Artboard-12.png";
const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const onClick = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <div className={styles.titleIconContainer}>
          <img
            src={IconImage}
            alt="Icon Image"
            className={styles.titleIconStyle}
          />
        </div>
      </div>
      <div className={styles.middleContainer}>
        <div className={styles.homeStyles}>
          <p>Home</p>
        </div>
        <div className={styles.whatWeDoStyle}>
          <p>What We Do</p>
        </div>
        <div className={styles.ourApproachStyle}>
          <p>Our Approach</p>
        </div>
        <div className={styles.whoWeAreStyle}>
          <p>Who We Are</p>
        </div>
        <div className={styles.insightsStyle}>
          <p>Insights</p>
        </div>
      </div>
      <div className={styles.endContainer}></div>
    </div>
  );
};
export default NavBar;

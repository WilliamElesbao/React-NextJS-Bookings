/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/components/BtnMenu.module.css";

export function BtnMenu() {
  return (
    <button className={styles.btnMenuBkgColor}>
      <FontAwesomeIcon icon={faBarsStaggered} className={styles.btnMenu} />
    </button>
  );
}

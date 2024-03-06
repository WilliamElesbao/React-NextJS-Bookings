/** @format */

import styles from "../styles/components/Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faHome,
  faCheckToSlot,
  faBookmark,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export function Sidebar() {
  return (
    <div className={styles.container}>
      <button>
        <FontAwesomeIcon icon={faTimesCircle} className={styles.closeBtn} />
      </button>

      <ul>
        <li>
          <Link href="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        <li>
          <a href="/mybookings">
            <FontAwesomeIcon icon={faBookmark} /> Minhas Reservas
          </a>
        </li>
        <li>
          <a href="/availableplaces">
            <FontAwesomeIcon icon={faCheckToSlot} /> Mesas Disponíveis
          </a>
        </li>
      </ul>
      <button className={styles.btnLogOut}>
        <FontAwesomeIcon icon={faArrowRightFromBracket} /> Sair
      </button>
    </div>
  );
}

/** @format */

import styles from "../styles/components/MyBookedItem.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export function MyBookedItem() {
  return (
    <div className={styles.card_container}>
      <div className={styles.card}>
        <div className={styles.titleItem}>
          <div className={styles.circle}></div>
          <h2>Quarta-feira - 20 de março de 2024</h2>
        </div>
        <table>
          <thead>
            <tr>
              <th>Local</th>
              <th>Horário</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ilha 1 - Mesa 1</td>
              <td>07:00 às 17:55</td>
              <td className={styles.btnActions}>
                <button>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button>
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

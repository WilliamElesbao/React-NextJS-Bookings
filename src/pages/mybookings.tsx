/** @format */

import { BtnMenu } from "@/components/BtnMenu";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import styles from "../styles/pages/MyBookings.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { MyBookedItem } from "@/components/MyBookedItem";

export default function MyBookings() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>
          <FontAwesomeIcon icon={faBookOpen} /> Minhas Reservas
        </h1>
        <div className={styles.myBookedItems_container}>
          <MyBookedItem />
        </div>
      </div>

      <div className={styles.btnMenu}>
        <BtnMenu />
      </div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
    </>
  );
}

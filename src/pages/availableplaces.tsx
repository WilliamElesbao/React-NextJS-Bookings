/** @format */

import { BtnMenu } from "@/components/BtnMenu";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import styles from "../styles/pages/AvailablePlaces.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { AvailablePlaces } from "@/components/AvailablePlaces";

export default function MyBookings() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>
          <FontAwesomeIcon icon={faMapLocationDot} /> Lugares Disponíveis
        </h1>
        <div className={styles.myBookedItems_container}>
          <AvailablePlaces />
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

/** @format */
import { Header } from "@/components/Header";
import { Calendar } from "../components/Calendar";
import styles from "../styles/pages/Home.module.css";
import { BtnMenu } from "@/components/BtnMenu";
import { Sidebar } from "@/components/Sidebar";

const HomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <h1>Bookings</h1>
        <Calendar />
      </div>
      <div className={styles.btnMenu}>
        <BtnMenu />
      </div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
    </>
  );
};

export default HomePage;

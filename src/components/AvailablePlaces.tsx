/** @format */

import styles from "../styles/components/AvailablePlace.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import BookingForm from "./BookingForm";

export function AvailablePlaces() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const bookingForm = () => {
    setShowBookingForm(true);
  };
  const closeBookingForm = () => {
    setShowBookingForm(false);
  };
  return (
    <div className={styles.card_container}>
      <div className={styles.card}>
        <div className={styles.titleItem}>
          <div className={styles.circle}></div>
          <h2>Ilha 1 - Mesa 1</h2>
        </div>
        <button onClick={bookingForm}>
          <FontAwesomeIcon icon={faPlus} /> Reservar
        </button>
        {showBookingForm && (
          <BookingForm onClose={closeBookingForm} selectedDay={null} />
        )}
      </div>
    </div>
  );
}

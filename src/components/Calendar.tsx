/** @format */

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/components/Calendar.module.css";
import BookingForm from "./BookingForm"; // Importe o componente BookingForm

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  function shouldShowPrevButton() {
    const today = new Date();
    return (
      currentDate.getFullYear() > today.getFullYear() ||
      (currentDate.getFullYear() === today.getFullYear() &&
        currentDate.getMonth() > today.getMonth())
    );
  }

  function isWeekend(day: number) {
    const dayOfWeek = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    ).getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  }

  const isDisabledDay = (day: number) => {
    const today = new Date();
    const currentDateCopy = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );

    return (
      currentDateCopy < today ||
      isWeekend(day) ||
      [0, 6].includes(currentDateCopy.getDay())
    );
  };

  const handleDayClick = (day: number) => {
    if (!isDisabledDay(day)) {
      setSelectedDay(day);

      // Armazene a data completa no estado selectedDate
      const newSelectedDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      setSelectedDate(newSelectedDate);
    }
  };

  const getLastDayOfMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();

  const getWeekdayNames = () => [
    "Dom",
    "Seg",
    "Ter",
    "Qua",
    "Qui",
    "Sex",
    "Sáb",
  ];

  const totalDays = getLastDayOfMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  const startingDay = firstDay.getDay();

  const bookingForm = () => {
    if (selectedDay !== null && selectedDate !== null) {
      setShowBookingForm(true);
      console.log("Data completa selecionada:", selectedDate);

      const formattedDate = new Intl.DateTimeFormat("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(selectedDate);

      console.log("Data formatada em pt-BR:", selectedDate);
    }
  };

  const closeBookingForm = () => {
    setShowBookingForm(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.calendarHeader}>
          <span>Selecionar data</span>
        </div>

        <div className={styles.calendarMonths}>
          <h1>
            {currentDate.toLocaleString("pt-br", {
              month: "long",
              year: "numeric",
            })}
          </h1>
          <div className={styles.btnPrevAndNextMonth}>
            {shouldShowPrevButton() && (
              <button
                onClick={() =>
                  setCurrentDate(
                    new Date(
                      currentDate.getFullYear(),
                      currentDate.getMonth() - 1,
                      1
                    )
                  )
                }>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            )}
            <button
              onClick={() =>
                setCurrentDate(
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth() + 1,
                    1
                  )
                )
              }>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>

        <div className={styles.calendarContainer}>
          <div className={styles.weekdayNames}>
            {getWeekdayNames().map((weekday, index) => (
              <div
                key={index}
                className={`${styles.weekdayHeader} ${
                  index === 0 || index === 6 ? styles.weekend : ""
                }`}>
                {weekday}
              </div>
            ))}
          </div>

          <div className={styles.calendar}>
            {Array.from({ length: startingDay }, (_, index) => (
              <div
                key={`empty-${index}`}
                className={`${styles.emptyDay} ${styles.disabledDay}`}></div>
            ))}
            {Array.from({ length: totalDays }, (_, index) => index + 1).map(
              (day) => (
                <div
                  key={day}
                  className={`${styles.day} ${
                    isDisabledDay(day) && styles.disabledDay
                  } ${selectedDay === day ? styles.selectedDay : ""}`}
                  onClick={() => {
                    handleDayClick(day);
                  }}>
                  {day}
                </div>
              )
            )}
          </div>
        </div>

        <div className={styles.btnFooter}>
          <button
            className={`${styles.btnCheckAvailability} ${
              selectedDay === null && styles.disabledDay
            }`}
            onClick={bookingForm}
            disabled={selectedDay === null}>
            Agendar
          </button>
          {showBookingForm && (
            <BookingForm
              onClose={closeBookingForm}
              selectedDay={selectedDate}
            />
          )}
        </div>
      </div>
    </>
  );
}

/** @format */

// BookingForm.tsx
import React from "react";
import styles from "../styles/components/BookingForm.module.css";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useRouter } from "next/router";

interface BookingFormProps {
  onClose: () => void;
  selectedDay: Date | null;
}

const BookingForm: React.FC<BookingFormProps> = ({ onClose, selectedDay }) => {
  const router = useRouter(); // Use o hook useRouter do Next.js

  const formatSelectedDate = (date: Date) => {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    return new Intl.DateTimeFormat("pt-BR", options).format(date);
  };

  const isAvailablePlacesRoute = router.pathname === "/availableplaces";

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.closeButton} onClick={onClose}>
          &times;
        </span>

        <div className={styles.headerForm}>
          <span className={styles.title}>Booking Form</span>
          <span className={styles.dateSelected}>
            {selectedDay !== null && (
              <div>
                <p>Dia Selecionado: {formatSelectedDate(selectedDay)}</p>
              </div>
            )}
          </span>
        </div>
        <div className={styles.form}>
          <form action="">
            <div className={styles.s}>
              <Label htmlFor="userID">Matrícula:</Label>
              <Input type="number" placeholder="Seu número de matrícula..." />
            </div>
            <div className={styles.s}>
              <Label htmlFor="username">Nome:</Label>
              <Input type="text" placeholder="Seu nome..."></Input>
            </div>
            {isAvailablePlacesRoute && (
              <div>
                <Label htmlFor="startTime">Escolha uma data:</Label>
                <Input type="date" />
              </div>
            )}
            <div className={styles.s}>
              <Label htmlFor="startTime">Horário de início:</Label>
              <Input type="time" />
            </div>
            <div className={styles.s}>
              <Label htmlFor="endTime">Horário de término:</Label>
              <Input type="time" />
            </div>
            <div className={styles.s}>
              <Label htmlFor="cellSelected">Selecione a mesa desejada:</Label>
              <Select>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Selecione a mesa desejada" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Ilha 1</SelectLabel>
                    <SelectItem value="ilha_1_mesa_1">Mesa 1</SelectItem>
                    <SelectItem value="ilha_1_mesa_2">Mesa 2</SelectItem>
                    <SelectItem value="ilha_1_mesa_3">Mesa 3</SelectItem>
                    <SelectItem value="ilha_1_mesa_4">Mesa 4</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Ilha 2</SelectLabel>
                    <SelectItem value="ilha_2_mesa_1">Mesa 1</SelectItem>
                    <SelectItem value="ilha_2_mesa_2">Mesa 2</SelectItem>
                    <SelectItem value="ilha_2_mesa_3">Mesa 3</SelectItem>
                    <SelectItem value="ilha_2_mesa_4">Mesa 4</SelectItem>
                    <SelectItem value="ilha_2_mesa_5">Mesa 5</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className={styles.s}>
              <Label htmlFor="message">Comentário:</Label>
              <Textarea
                className={styles.textarea}
                placeholder="Insira um comentário..."
                id="message"
              />
            </div>
            <div className={styles.plantaBaixa}>
              <button className={styles.btnPlantaBaixa}>
                Visualizar Planta Baixa
              </button>
              <Image
                src="/img/planta_baixa.jpeg"
                alt="Planta Baixa Exemplo"
                width={350}
                height={0}
              />
            </div>
            <button type="submit" className={styles.saveBooking}>
              Salvar meu agendamento
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;

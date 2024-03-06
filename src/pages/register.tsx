/** @format */

import React from "react";
import styles from "../styles/components/Register.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [direction, setDirection] = useState("translateX(0)");

  useEffect(() => {
    setDirection(router.pathname === "/register" ? "translateX(150%)" : "");
  }, [router.pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.bkgImage}>
        <div
          className={styles.form}
          style={{
            transform: direction,
            transition: "transform 0.7s ease",
            borderRadius: "0 16px 16px 0",
          }}>
          <form action="">
            <span>TMSA - Bookings</span>
            <div className={styles.inputFields}>
              <input type="text" placeholder="Username..." required />
              <input type="password" placeholder="Password..." required />
              <input type="password" placeholder="Password..." required />
            </div>

            <button type="submit">Criar minha conta</button>
          </form>
          <Link href="/login">Ir para Login</Link>
        </div>
      </div>
    </div>
  );
}

/** @format */

import React from "react";
import styles from "../styles/components/Login.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [direction, setDirection] = useState("translateX(0)");

  useEffect(() => {
    setDirection(router.pathname === "/login" ? "translateX(0%)" : "");
  }, [router.pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.bkgImage}>
        <div
          className={styles.form}
          style={{ transform: direction, transition: "transform 0.7s ease" }}>
          <form action="">
            <span>TMSA - Bookings</span>
            <div className={styles.inputFields}>
              <input type="text" placeholder="Username..." required />
              <input type="password" placeholder="Password..." required />
            </div>

            <button type="submit">Sign In</button>
          </form>
          <Link href="/register">Não tem uma conta ?</Link>
        </div>
      </div>
    </div>
  );
}

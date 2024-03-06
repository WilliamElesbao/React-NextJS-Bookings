/** @format */

import Image from "next/image";
import style from "../styles/components/Header.module.css";
export function Header() {
  return (
    <div className={style.container}>
      <div className="logo">
        <Image
          src="/img/tmsa_logo.png"
          alt="Planta Baixa Exemplo"
          width={150}
          height={0}
        />
      </div>
    </div>
  );
}

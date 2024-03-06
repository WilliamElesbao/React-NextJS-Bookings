/** @format */

import { Inter } from "next/font/google";
import "../styles/global.css";

const inter = Inter({ subsets: ["latin"], style: ["normal"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}

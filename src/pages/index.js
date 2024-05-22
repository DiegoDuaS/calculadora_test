import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Calc from "@/components/calc";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <Calc></Calc>
      </main>
    </>
  );
}

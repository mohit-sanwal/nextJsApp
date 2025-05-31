"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
 
  return (
    <div className={styles.page}>
      <main className={styles.main}>
         <h1> Home page </h1>
         <Link href='/about'> <span className={styles.link}> about </span> </Link>
      </main>
      <footer className={styles.footer}>
           footer section 
      </footer>
    </div>
  );
}

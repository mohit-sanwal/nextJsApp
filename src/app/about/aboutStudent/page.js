"use client"
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function AboutStudent() {
    const router = useRouter();
    const goToHome = (name) => {
      router.push(name);
    }
  return (
    <div>
      <main>
        <h1> About student page  </h1>
      </main>
      <footer>
        footer section <button onClick={() => goToHome('/')}>go to home</button>
      </footer>
    </div>
  );
}
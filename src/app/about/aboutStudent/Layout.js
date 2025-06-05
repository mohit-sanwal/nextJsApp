"use client"
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Layout() {
    const router = useRouter();
    const goToHome = (name) => {
      router.push(name);
    }
  return (
    <div >
      <main>
         <h1> About layout student page  </h1>
      </main>
      <footer>
           footer section <button onClick={() => goToHome('/')}>go to home</button>
      </footer>
    </div>
  );
}
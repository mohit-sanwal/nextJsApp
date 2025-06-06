"use client"
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Layout({children}) {
    const router = useRouter();
    const goToHome = (name) => {
      router.push(name);
    }
  return (
    <div >
      <main>
         <h1> About layout student page  </h1>
         {children}
      </main>
    </div>
  );
}
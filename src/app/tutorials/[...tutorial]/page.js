"use client"
import styles from "./page.module.css";
import { useParams } from "next/navigation";

export default function Tutorial() {
   const params = useParams();
   console.log('params', params);
  return (
    <div>
      <main>
         <h1> tutorial {params.tutorial[0]}  </h1>
      </main>
    </div>
  );
}
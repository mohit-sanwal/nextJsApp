"use client"
import styles from "./page.module.css";
import { useRouter, useParams } from 'next/navigation';


export default function StudentDetail() {
    const router = useRouter();
    const params = useParams();
    const studentId = params.studentId;
    const goToHome = (name) => {
      router.push(name);
    }
  return (
    <div >
      <main>
         <h1> About student Detail page  </h1>
         <p> User ID: {studentId}</p>
      </main>
      <footer>
           footer section <button onClick={() => goToHome('/')}>go to home</button>
      </footer>
    </div>
  );
}
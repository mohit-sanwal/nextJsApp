"use client"
import styles from "./page.module.css";
import { useRouter, useParams, usePathname } from "next/navigation";

export default function Layout({children}) {
    const router = useRouter();
    const params = useParams();
    const pathName = usePathname();
    const studentId = params.studentId;
    console.log('pathName', pathName);
    const goToHome = (name) => {
      router.push(name);
    }
  return (
    <div>
      <main>
         <h1> About layout student page  </h1>
         { pathName === `/about/aboutStudent/${studentId}` ? <div class={styles.studentDetail_bg}> student specific detail page </div> : "" }
         {children}
      </main>
    </div>
  );
}
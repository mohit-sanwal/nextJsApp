"use client"
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useRouter, useParams, usePathname } from "next/navigation";

export default function Posts() {
    const [posts, setPosts] = useState([]);

   useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await fetch('api/posts');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setPosts(data);
        } catch (error) {
        console.error('Failed to fetch or parse JSON:', error);
        }
    };
    fetchData();
   }, []);
    
  return (
    <div>
      {
        posts.length && posts.map((post) => {
            return (
                <h6 key={post.id}>{post.title}</h6>
            )
        })
      }
    </div>
  );
}
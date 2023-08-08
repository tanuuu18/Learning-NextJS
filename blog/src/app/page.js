"use client";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Events, Function and State</h1>
      <button onClick={() => alert("Hello Next.js")}>Click me</button>
    </main>
  );
}

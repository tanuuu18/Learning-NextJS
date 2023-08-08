"use client";
import styles from "./page.module.css";

export default function Home() {
  const apple = (item) => {
    alert(item);
  };
  return (
    <main className={styles.main}>
      <h1>Events, Function and State</h1>
      <button onClick={() => apple("Apple")}>Click me</button>
    </main>
  );
}

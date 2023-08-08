"use client";
import styles from "./page.module.css";

export default function Home() {
  const apple = () => {
    alert("Fruit");
  };
  return (
    <main className={styles.main}>
      <h1>Events, Function and State</h1>
      <button onClick={apple}>Click me</button>
    </main>
  );
}

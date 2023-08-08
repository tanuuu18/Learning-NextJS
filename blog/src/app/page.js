"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [name, setName] = useState("Tanu");
  let data = "T";
  const apple = () => {
    data = "t";
  };
  return (
    <main className={styles.main}>
      <h1>Events, Function and State {data}</h1>
      <button onClick={() => apple()}>Click me</button>
    </main>
  );
}

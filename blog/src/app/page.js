"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [name, setName] = useState("Tanu");

  const apple = () => {
    setName("Tanushree");
  };

  const InnerComp = () => {
    return <h1>Inner Component</h1>;
  };
  return (
    <main className={styles.main}>
      <h1>Events, Function and State {name}</h1>
      <button onClick={() => apple()}>Click me</button>
      {/* Component calling as a function
      Calling function as a Component */}
      <InnerComp />
      {/* Using as a function */}
      {InnerComp()}
    </main>
  );
}

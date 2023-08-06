import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <User />
      <h1>Home page</h1>
    </main>
  );
}

const User = () => {
  return (
    <div>
      <h2>Tanushree</h2>
    </div>
  );
};

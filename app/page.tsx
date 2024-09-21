import ClientLayout from "./ClientLayout";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.contentWrapper}>
        <h1>Welcome to Jeddit</h1>
        <p>this is the home page</p>
      </div>
    </main>
  );
}

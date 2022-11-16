import { useCallback, useEffect, useState } from "react";
import styles from "../styles/home.module.css";

function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  );
}

function Home() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((v) => v + 1);
  }, [setCount]);

  useEffect(() => {
    const r = setInterval(() => {
      increment();
    }, 1000);

    return () => {
      clearInterval(r);
    };
  }, [increment]);

  return (
    <main className={styles.main}>
      <h1>This is a cool project!</h1>
      <p>Just kidding, it's actually pretty rudimentarty</p>
      <hr className={styles.hr} />
      <div>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <hr className={styles.hr} />
    </main>
  );
}

export default Home;

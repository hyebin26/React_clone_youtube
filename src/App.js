import styles from "./app.module.css";
import Header from "./component/header/header";

function App() {
  return (
    <section className={styles.container}>
      <Header />
    </section>
  );
}

export default App;

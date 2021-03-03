import styles from "./app.module.css";
import Contents from "./component/contents/contents";
import Header from "./component/header/header";

function App() {
  return (
    <section className={styles.container}>
      <Header />
      <Contents />
    </section>
  );
}

export default App;

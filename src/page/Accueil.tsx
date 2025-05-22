import { Link } from "react-router-dom";
import styles from "./Accueil.module.css";

const Accueil = () => {
  return (
    <section>
      <h1 className={styles.firstTitle}>WELCOME</h1>
      <Link to="/quiz/1" className={styles.buttonStart}>
        start
      </Link>
    </section>
  );
};

export default Accueil;

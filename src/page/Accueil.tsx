import styles from "./Accueil.module.css";

const Accueil = () => {
  return (
    <>
      <section>
        <h1 className={styles.firstTitle}>WELCOME</h1>;
        <button className={styles.buttonStart}>start</button>
      </section>
    </>
  );
};

export default Accueil;

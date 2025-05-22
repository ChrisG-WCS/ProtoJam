import styles from "./GameOver.module.css";

const GameOver = () => {
  return (
    <>
      <h1 className={styles.gameLose}>Game Over</h1>
      <p>La prochaine fois, tu reflechis avant de repondre</p>
    </>
  );
};

export default GameOver;

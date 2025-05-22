import styles from "./GameOver.module.css";
import { useNavigate } from "react-router-dom";

const GameOver = () => {
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate("/quiz/1");
  };

  return (
    <>
      <h1 className={styles.gameLose}>Game Over</h1>
      <p>
        PFFFFFFF!!!! <br />
        La prochaine fois, tu réfléchis avant de répondre
      </p>
      <button onClick={handleRestart}>Recommencer le quiz</button>
    </>
  );
};

export default GameOver;

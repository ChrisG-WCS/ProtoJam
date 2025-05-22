import styles from "./GameOver.module.css";
import { useNavigate } from "react-router-dom";
import continueGif from "../images/Continue.gif";

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
      <img
        src={continueGif}
        alt="Recommencer le quiz"
        style={{ cursor: "pointer", width: "150px" }}
        onClick={handleRestart}
      />
    </>
  );
};

export default GameOver;

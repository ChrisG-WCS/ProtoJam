import styles from "./GameOver.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import continueGif from "../images/Continue.gif";
import gameoverSound from "../assets/sounds/gameover.mp3"; // importe le son

const GameOver = () => {
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate("/quiz/1");
  };

  useEffect(() => {
    const audio = new Audio(gameoverSound);
    audio.play();
  }, []);

  return (
    <>
      <h1 className={styles.gameLose}>Game Over</h1>
      <p>
        PFFFFFFF!!!! <br />
        La prochaine fois, tu réfléchis avant de répondre
      </p>
      <img
        src={continueGif}
        alt="Recommencer"
        onClick={handleRestart}
        style={{ cursor: "pointer", width: "150px" }}
      />
    </>
  );
};

export default GameOver;

import styles from "./GameOver.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import continueGif from "../images/Continue.gif";
import gameoverSound from "../assets/sounds/gameover.mp3";

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
        PAF !!! T’as perdu tous tes rings ! <br />
        T’as foncé comme Sonic… mais sans réfléchir !
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

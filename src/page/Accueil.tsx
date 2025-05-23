import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Accueil.module.css";
import sega from "../images/sega.gif";
import segaSound from "../assets/sounds/Sg.mp3";

const Accueil = () => {
  const [audio] = useState(new Audio(segaSound));

  const playSound = () => {
    audio.play();
  };

  return (
    <section style={{ textAlign: "center" }}>
      <img
        src={sega}
        alt="Welcome animation"
        className={styles.welcomeGif}
        style={{ width: "300px", height: "auto", cursor: "pointer" }}
        onClick={playSound}
      />
      <Link
        to="/quiz/1"
        className={styles.buttonStart}
        style={{ display: "block", marginTop: "20px" }}
      >
        start
      </Link>
    </section>
  );
};

export default Accueil;

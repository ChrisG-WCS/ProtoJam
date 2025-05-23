import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Accueil.module.css";
import sega from "../images/sega.gif";
import segaSound from "../assets/sounds/Sg.mp3";
import title from "../images/Gota_go_Code-removebg-preview.png";

const Accueil = () => {
  const [audio] = useState(new Audio(segaSound));

  const playSound = () => {
    audio.play();
  };

  return (
    <section style={{ textAlign: "center" }}>
      <h1>
        <img
          src={title}
          alt="GOTA GO CODE"
          className={styles.title}
          style={{ width: "400px" }}
        />
      </h1>

      <img
        src={sega}
        alt="Welcome animation"
        className={styles.welcomeGif}
        style={{ width: "200px", height: "auto", cursor: "pointer" }}
        onClick={playSound}
      />
      <Link
        to="/quiz/1"
        className={styles.buttonStart}
        style={{ display: "block", textAlign: "center" }}
      >
        start
      </Link>
    </section>
  );
};

export default Accueil;

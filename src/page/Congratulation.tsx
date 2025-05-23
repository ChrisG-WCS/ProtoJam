import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import sonicVictory from "../images/sonic-victory.gif";
import gameoverSound from "../assets/sounds/congratulation.mp3";

const Congratulation = () => {
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate("/quiz/1");
  };

  useEffect(() => {
    const audio = new Audio(gameoverSound);
    audio.play();
  }, []);

  return (
    <div>
      <h1 style={{fontSize: "3rem"}}>Bravo !</h1>
      <img src={sonicVictory} alt="Sonic qui célèbre" />
      <p style={{fontSize: "1.4rem"}}>Tu l’as fait sans faute, gotta go fast !🔥</p>
      <button onClick={handleRestart} style={{height: "3rem", fontSize: "1rem", background: "blue", color: "white"}}>Recommencer</button>
    </div>
  );
};

export default Congratulation;

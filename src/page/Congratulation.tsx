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
      <h1>Bravo !</h1>
      <img src={sonicVictory} alt="Sonic qui célèbre" />
      <p>Tu l’as fait sans faute, comme Sonic en pleine course ! 🔥</p>
      <button onClick={handleRestart}>Recommencer</button>
    </div>
  );
};

export default Congratulation;

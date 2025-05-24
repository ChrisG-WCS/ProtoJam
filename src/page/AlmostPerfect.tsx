import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import sonicAlmostPerfect from "/images/AlmostPerfect.gif";
import continueSound from "/sounds/continue.mp3";
import continueGif from "/images/Continue.gif";

const AlmostPerfect = () => {
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate("/quiz/1");
  };

  useEffect(() => {
    const audio = new Audio(continueSound);
    audio.play();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Presque parfait !</h1>
      <img
        src={sonicAlmostPerfect}
        alt="Sonic presque parfait"
        style={{ maxWidth: "300px", marginBottom: "1rem" }}
      />
      <p>
        Tu as encore des vies, mais pas un sans faute... Reviens plus fort pour
        faire un score parfait !
      </p>
      <img
        src={continueGif}
        alt="Recommencer"
        onClick={handleRestart}
        style={{ cursor: "pointer", width: "150px" }}
      />
    </div>
  );
};

export default AlmostPerfect;

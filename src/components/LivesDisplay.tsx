import { useLives } from "../context/LivesContext";
import sonicRing from "/images/sonic-ring-sonic.gif";
import style from "./LivesDisplay.module.css";

const LivesDisplay = () => {
  const { lives } = useLives();

  return (
    <div
      style={{ display: "flex", alignItems: "center" }}
      className={style.livesContainer}
    >
      {Array.from({ length: lives }).map((_, i) => (
        <img
          key={i}
          src={sonicRing}
          alt="vie Sonic"
          style={{ width: "4rem", height: "4rem", marginRight: "6px" }}
        />
      ))}
    </div>
  );
};

export default LivesDisplay;

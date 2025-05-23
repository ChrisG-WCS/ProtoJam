import { useLives } from "../context/LivesContext";
import sonicRing from "../images/sonic-ring-sonic.gif";

const LivesDisplay = () => {
  const { lives } = useLives();

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {Array.from({ length: lives }).map((_, i) => (
        <img
          key={i}
          src={sonicRing}
          alt="vie Sonic"
          style={{ width: "30px", height: "30px", marginRight: "6px" }}
        />
      ))}
    </div>
  );
};

export default LivesDisplay;

import { useLives } from "../context/LivesContext";

const LivesDisplay = () => {
  const { lives } = useLives();

  return (
    <div>
      {Array.from({ length: lives }).map((_, i) => (
        <span key={i} style={{ color: "red", fontSize: "2rem" }}>
          ❤️
        </span>
      ))}
    </div>
  );
};

export default LivesDisplay;

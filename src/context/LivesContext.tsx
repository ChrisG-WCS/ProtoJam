import { createContext, useState, useContext } from "react";

type LivesContextType = {
  lives: number;
  loseLife: () => void;
  mistakeMade: boolean;
  setMistakeMade: (value: boolean) => void;
};

const LivesContext = createContext<LivesContextType | undefined>(undefined);

export const LivesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lives, setLives] = useState(3);
  const [mistakeMade, setMistakeMade] = useState(false);

  const loseLife = () => {
    setLives((prev) => Math.max(prev - 1, 0));
  };

  return (
    <LivesContext.Provider
      value={{ lives, loseLife, mistakeMade, setMistakeMade }}
    >
      {children}
    </LivesContext.Provider>
  );
};

export const useLives = () => {
  const context = useContext(LivesContext);
  if (!context) {
    throw new Error("useLives must be used within a LivesProvider");
  }
  return context;
};

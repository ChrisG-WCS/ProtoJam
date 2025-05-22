import { createContext, useState, useContext, useCallback } from "react";
import type { ReactNode } from "react";

interface LivesContextType {
  lives: number;
  loseLife: () => void;
  resetLives: () => void;
}

const LivesContext = createContext<LivesContextType | null>(null);

interface LivesProviderProps {
  children: ReactNode;
}

export const LivesProvider: React.FC<LivesProviderProps> = ({ children }) => {
  const [lives, setLives] = useState<number>(3);

  const loseLife = useCallback(() => {
    setLives((prev) => (prev > 0 ? prev - 1 : 0));
  }, []);

  const resetLives = useCallback(() => {
    setLives(3);
  }, []);

  const value = { lives, loseLife, resetLives };

  return (
    <LivesContext.Provider value={value}>{children}</LivesContext.Provider>
  );
};

export const useLives = (): LivesContextType => {
  const context = useContext(LivesContext);
  if (!context) {
    throw new Error("useLives doit être utilisé dans un LivesProvider");
  }
  return context;
};

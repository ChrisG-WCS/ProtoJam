import { createContext, useState, useContext, useCallback } from "react";
import type { ReactNode } from "react";
import LoseLifeSound from "../assets/sounds/LoseLifeSound.mp3";

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

  // Création de l'objet audio une seule fois
  const loseLifeAudio = new Audio(LoseLifeSound);

  const loseLife = useCallback(() => {
    // joue le son quand on perd une vie
    loseLifeAudio.play().catch(() => {
      // gère le cas où le navigateur bloque l'autoplay
      console.log("Impossible de jouer le son lose life automatiquement");
    });

    setLives((prev) => (prev > 0 ? prev - 1 : 0));
  }, [loseLifeAudio]);

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

import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import questions from "../data/Questions";
import Card from "../components/Card";
import LivesDisplay from "../components/LivesDisplay";
import { LivesProvider } from "../context/LivesContext";
import QuizSound from "../assets/sounds/QuizSound.mp3";

const Quiz = () => {
  const { id } = useParams();
  const questionId = Number(id);
  const question = questions.find((q) => q.id === questionId);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(QuizSound);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    audioRef.current.play().catch(() => {
      console.log("Autoplay bloqué, attendre interaction utilisateur.");
    });

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  return (
    <LivesProvider>
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <LivesDisplay />
        {question ? (
          <Card key={question.id} question={question} />
        ) : (
          <p>Question introuvable</p>
        )}
      </section>
    </LivesProvider>
  );
};

export default Quiz;

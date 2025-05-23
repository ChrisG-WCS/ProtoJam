import { useParams } from "react-router-dom";
import questions from "../data/Questions";
import Card from "../components/Card";
import LivesDisplay from "../components/LivesDisplay";
import { LivesProvider } from "../context/LivesContext";

const Quiz = () => {
  const { id } = useParams();
  const questionId = Number(id);
  const question = questions.find((q) => q.id === questionId);

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

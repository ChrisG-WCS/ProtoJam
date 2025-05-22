import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLives } from "../context/LivesContext";

type Question = {
  id: number;
  text: string;
  options: string[];
  answer: string;
};

type CardProps = {
  question?: Question;
};

const Card: React.FC<CardProps> = ({ question }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasMistake, setHasMistake] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const currentId = parseInt(id || "1");
  const { lives, loseLife } = useLives();

  if (!question) {
    return <p>Question introuvable</p>;
  }

  const handleClick = (option: string) => {
    if (selectedOption !== null) return;

    setSelectedOption(option);

    const isCorrect = option === question.answer;
    alert(isCorrect ? "Bonne réponse !" : "Mauvaise réponse !");

    if (!isCorrect) {
      loseLife();
      setHasMistake(true);
    }

    const nextLives = isCorrect ? lives : lives - 1;

    setTimeout(() => {
      if (nextLives <= 0) {
        navigate("/gameover");
      } else if (currentId === 10) {
        if (hasMistake) {
          navigate("/almostperfect");
        } else {
          navigate("/congratulation");
        }
      } else {
        navigate(`/quiz/${currentId + 1}`);
      }
    }, 1000);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{question.text}</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {question.options.map((option, index) => {
          const isSelected = selectedOption === option;
          const isCorrect = option === question.answer;

          return (
            <li key={index} style={{ margin: "0.5rem 0" }}>
              <button
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid #007bff",
                  borderRadius: "5px",
                  backgroundColor: isSelected
                    ? isCorrect
                      ? "#d4edda"
                      : "#f8d7da"
                    : "#fff",
                  cursor: "pointer",
                }}
                onClick={() => handleClick(option)}
                disabled={selectedOption !== null}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Card;

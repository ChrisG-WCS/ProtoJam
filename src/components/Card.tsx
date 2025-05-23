import { useState } from "react";
import style from "./Card.module.css"
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
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
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

    const correct = option === question.answer;
    setIsCorrect(correct);
    setFeedback(correct ? "Bonne réponse !" : "Mauvaise réponse !");

    let mistakeMade = hasMistake;
    if (!correct) {
      loseLife();
      mistakeMade = true;
      setHasMistake(true);
    }

    const nextLives = correct ? lives : lives - 1;

    setTimeout(() => {
      if (nextLives <= 0) {
        navigate("/gameover");
      } else if (currentId === 10) {
        if (mistakeMade) {
          navigate("/almostperfect");
        } else {
          navigate("/congratulation");
        }
      } else {
        navigate(`/quiz/${currentId + 1}`);
      }
    }, 1500);
  };

  return (
    <div className={style.cardContainer}>
    <div className={style.quizQuestion}>{question.text}</div>
    <ul className={style.optionsList}>
        {question.options.map((option, index) => {
          const isSelected = selectedOption === option;
          const correctOption = option === question.answer;

          return (
            <li key={index} style={{ margin: "0.5rem 0" }}>
              <button
                style={{
                  width: "15rem",
                  fontSize: "1rem",
                  padding: "0.5rem 1rem",
                  border: "1px solid #007bff",
                  borderRadius: "5px",
                  backgroundColor: isSelected
                      ? isCorrect
                      ? "#11c914" 
                      : "#ff3200" 
                      : "#fff",
                  cursor: selectedOption === null ? "pointer" : "default",
                  pointerEvents: selectedOption !== null ? "none" : "auto",
                }}
                onClick={() => handleClick(option)}
                disabled={selectedOption !== null} // bloque après un choix                
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
      {feedback && (
        <p
          style={{
            marginTop: "1rem",
            fontWeight: "bold",
            color: isCorrect ? "green" : "red",
            fontSize: "1.2rem",
          }}
        >
          {feedback}
        </p>
      )}
    </div>
  );
};

export default Card;










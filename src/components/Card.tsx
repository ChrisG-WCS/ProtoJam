import { useState } from "react";
import style from "./Card.module.css"

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

  if (!question) {
    return <p>Question introuvable</p>;
  }

  const handleClick = (option: string) => {
    setSelectedOption(option);
    const isCorrect = option === question.answer;
    alert(isCorrect ? "Bonne réponse !" : "Mauvaise réponse !");
  };

  return (
    <div className={style.cardContainer}>
    <div className={style.quizQuestion}>{question.text}</div>
    <ul className={style.optionsList}>
        {question.options.map((option, index) => {
          const isSelected = selectedOption === option;
          const isCorrect = option === question.answer;

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
                      ? "#11c914" // vert clair si bonne réponse
                      : "#ff3200" // rouge clair si mauvaise réponse
                      : "#fff",
                  cursor: "pointer",
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
    </div>
  );
};

export default Card;










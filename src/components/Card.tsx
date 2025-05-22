import { useState } from "react";

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
                      ? "#d4edda" // vert clair si bonne réponse
                      : "#f8d7da" // rouge clair si mauvaise réponse
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




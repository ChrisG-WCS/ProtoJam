import { Question } from "./quiz";
import style from "./questionCard.module.css";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswerSelect: (index: number) => void;
  totalQuestions: number;
  currentQuestion: number;
}
export default function QuestionCard({
  question,
  selectedAnswer,
  onAnswerSelect,
  totalQuestions,
  currentQuestion,
}: QuestionCardProps) {
  const getButtonClass = (index: number): string => {
    if (selectedAnswer === null) return style.optionBtn;
    if (index === question.correct) return `${style.optionBtn} ${style.correct}`;
    if (selectedAnswer === index) return `${style.optionBtn} ${style.wrong}`;
    return `${style.optionBtn} ${style.disabled}`;
  };
  

  return (
    <div>
      <h2 className={style.title}>
        Question {currentQuestion + 1} of {totalQuestions}
      </h2>
      <p className={style.paragraphe}>{question.question}</p>

      <div className={style.questionsContainer}>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => selectedAnswer === null && onAnswerSelect(index)}
            className={`w-full p-4 text-left border rounded-lg transition-all duration-300 ${getButtonClass(
              index
            )}`}
          >
          </button>
        ))}
      </div>
    </div>
  );
}
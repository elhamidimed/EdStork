import React, { useState } from "react";

interface QuizProps {
  quiz: {
    question: string;
    choices: { text: string; correct: boolean }[];
  };
  onChange: (selectedChoices: string[]) => void;
}

const QuizComponent: React.FC<QuizProps> = ({ quiz, onChange }) => {
  const [selectedChoices, setSelectedChoices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (selectedChoices.includes(value)) {
      setSelectedChoices(selectedChoices.filter((choice) => choice !== value));
    } else {
      setSelectedChoices([...selectedChoices, value]);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    onChange(selectedChoices);
  };

  return (
    <div className="flex flex-col items-start space-y-2">
      <p className="font-bold">{quiz.question}</p>
      {quiz.choices.map((choice, index) => (
        <label
          key={index}
          className={`flex items-center space-x-2 cursor-pointer hover:bg-gray-100 rounded-lg p-2 ${
            submitted
              ? choice.correct
                ? "bg-green-200"
                : selectedChoices.includes(choice.text)
                ? "bg-red-200"
                : "bg-white"
              : selectedChoices.includes(choice.text)
              ? "bg-blue-200"
              : "bg-white"
          }`}
        >
          <input
            type="checkbox"
            name={`quiz-${quiz.question}`}
            value={choice.text}
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-indigo-600"
            disabled={submitted}
          />
          <span>{choice.text}</span>
        </label>
      ))}
      {!submitted && (
        <button
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default QuizComponent;

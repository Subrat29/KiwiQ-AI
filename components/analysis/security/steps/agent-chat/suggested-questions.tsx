"use client";

interface SuggestedQuestionsProps {
  questions: string[];
  onSelect: (question: string) => void;
}

export function SuggestedQuestions({ questions, onSelect }: SuggestedQuestionsProps) {
  return (
    <div className="space-y-2 mt-4">
      <p className="text-sm text-gray-600">Suggested questions:</p>
      {questions.map((question) => (
        <button
          key={question}
          className="w-full text-left p-2 text-sm text-gray-600 hover:bg-slate-800/50 rounded-lg"
          onClick={() => onSelect(question)}
        >
          {question}
        </button>
      ))}
    </div>
  );
}
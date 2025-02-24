import { useState } from "react";

export default function Questions({ formData, handleQuestionChange }) {
  const [openCategory, setOpenCategory] = useState(0);

  const categories = [
    {
      title: "Life Purpose",
      questions: [
        "What is my life purpose according to my birth chart?",
        "How can I align myself with my true calling?",
      ],
    },
    {
      title: "Career Paths",
      questions: [
        "Which career paths are most aligned with my cosmic energy?",
        "Should I switch careers for better alignment?",
      ],
    },
    {
      title: "Life Changes",
      questions: [
        "What major life changes are indicated in my chart?",
        "How should I prepare for upcoming transitions?",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Common Questions</h2>
      <p>Find answers to the most frequently asked queries.</p>
      <div className="mt-4">
        {categories.map((category, index) => (
          <div key={index} className="border rounded mb-2">
            <button
              className="w-full text-left p-2 font-normal bg-gray-200"
              onClick={() =>
                setOpenCategory(openCategory === index ? null : index)
              }
            >
              {category.title}
            </button>
            {openCategory === index && (
              <div className="p-4">
                {category.questions.map((question, qIndex) => (
                  <label key={qIndex} className="block">
                    <input
                      type="checkbox"
                      checked={formData.selectedQuestions.includes(question)}
                      onChange={() => handleQuestionChange(question)}
                      className="mr-2"
                    />
                    {question}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

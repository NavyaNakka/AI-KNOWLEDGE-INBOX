import { useState } from "react";
import axios from "axios";
import { FaRobot, FaPaperPlane } from "react-icons/fa";
import AnswerCard from "./AnswerCard";

function AskQuestion() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/query",
        {
          question,
        }
      );

      setAnswer(res.data.answer);
    } catch (err) {
      console.log(err);
      alert("Failed to get answer");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">

          <div className="bg-purple-100 text-purple-600 p-3 rounded-xl">
            <FaRobot size={22} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Ask AI
            </h2>

            <p className="text-slate-500 text-sm">
              Ask questions about your saved notes and URLs.
            </p>
          </div>

        </div>

        {/* Input */}

        <div className="flex flex-col md:flex-row gap-4">

          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAsk();
            }}
            placeholder="Example: What are React Hooks?"
            className="
              flex-1
              rounded-xl
              border
              border-slate-300
              p-4
              focus:ring-4
              focus:ring-purple-200
              focus:border-purple-500
              transition
            "
          />

          <button
            onClick={handleAsk}
            disabled={loading}
            className="
              flex
              items-center
              justify-center
              gap-2
              bg-gradient-to-r
              from-purple-600
              to-blue-600
              hover:from-purple-700
              hover:to-blue-700
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              shadow-md
              transition-all
              disabled:opacity-70
            "
          >
            <FaPaperPlane />

            {loading ? "Thinking..." : "Ask AI"}
          </button>

        </div>

        <p className="mt-4 text-sm text-slate-400">
          💡 Try asking: "Summarize my React notes" or "What does the React documentation say about Hooks?"
        </p>

      </div>

      <AnswerCard
        answer={answer}
        loading={loading}
      />
    </>
  );
}

export default AskQuestion;
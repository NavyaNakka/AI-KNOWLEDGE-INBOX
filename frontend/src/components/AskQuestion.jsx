import { useState } from "react";
import axios from "axios";
import {
  FaRobot,
  FaPaperPlane,
  FaSearch,
  FaLightbulb,
} from "react-icons/fa";
import AnswerCard from "./AnswerCard";

function AskQuestion() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const suggestions = [
    "Summarize my React notes",
    "What are React Hooks?",
    "Explain Express.js",
    "Compare React and Vue",
  ];

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
      <section className="max-w-5xl mx-auto">

        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8">

          {/* Header */}

          <div className="flex items-center gap-5 mb-8">

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center shadow-lg">

              <FaRobot
                className="text-white"
                size={28}
              />

            </div>

            <div>

              <h2 className="text-3xl font-bold text-slate-800">
                Ask Your AI Assistant
              </h2>

              <p className="text-slate-500 mt-1">
                Ask questions using your personal knowledge base.
              </p>

            </div>

          </div>

          {/* Search */}

          <div className="flex flex-col lg:flex-row gap-4">

            <div className="relative flex-1">

              <FaSearch
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAsk();
                  }
                }}
                placeholder="Ask anything about your saved knowledge..."
                className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-300
                  bg-slate-50
                  pl-14
                  pr-5
                  py-4
                  text-lg
                  outline-none
                  transition
                  focus:bg-white
                  focus:border-purple-500
                  focus:ring-4
                  focus:ring-purple-100
                "
              />

            </div>

            <button
              onClick={handleAsk}
              disabled={loading}
              className="
                min-w-[190px]
                rounded-2xl
                bg-gradient-to-r
                from-purple-600
                to-blue-600
                hover:from-purple-700
                hover:to-blue-700
                text-white
                font-semibold
                px-8
                py-4
                shadow-lg
                hover:shadow-xl
                transition-all
                duration-300
                hover:scale-105
                disabled:opacity-70
                disabled:hover:scale-100
                flex
                items-center
                justify-center
                gap-3
              "
            >
              <FaPaperPlane />

              {loading ? "Thinking..." : "Ask AI"}
            </button>

          </div>

          {/* Suggestions */}

          <div className="mt-8">

            <div className="flex items-center gap-2 text-purple-700 font-semibold mb-4">

              <FaLightbulb />

              Suggested Questions

            </div>

            <div className="flex flex-wrap gap-3">

              {suggestions.map((item) => (
                <button
                  key={item}
                  onClick={() => setQuestion(item)}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-slate-100
                    hover:bg-purple-100
                    hover:text-purple-700
                    text-sm
                    transition
                    border
                    border-slate-200
                  "
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

        </div>

      </section>

      <AnswerCard
        answer={answer}
        loading={loading}
      />
    </>
  );
}

export default AskQuestion;
import { useState } from "react";
import {
  FaRobot,
  FaCopy,
  FaCheckCircle,
} from "react-icons/fa";

function AnswerCard({ answer, loading }) {
  const [copied, setCopied] = useState(false);

  const copyAnswer = async () => {
    try {
      await navigator.clipboard.writeText(answer);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto mt-8">

        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white">
              <FaRobot size={24} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                AI is Thinking...
              </h2>

              <p className="text-slate-500">
                Generating an answer from your knowledge base.
              </p>
            </div>

          </div>

          <div className="mt-8 flex items-center gap-4">

            <div className="h-8 w-8 rounded-full border-4 border-purple-600 border-t-transparent animate-spin"></div>

            <span className="text-slate-600 text-lg">
              Please wait...
            </span>

          </div>

        </div>

      </div>
    );
  }

  if (!answer || answer.trim() === "") {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto mt-8">

      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">

        {/* Header */}

        <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-8 py-6">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">

                <FaRobot
                  size={24}
                  className="text-white"
                />

              </div>

              <div>

                <h2 className="text-3xl font-bold text-white">
                  AI Answer
                </h2>

                <p className="text-purple-100">
                  Generated using Gemini AI
                </p>

              </div>

            </div>

            <button
              onClick={copyAnswer}
              className="bg-white text-purple-700 hover:bg-slate-100 px-5 py-2 rounded-xl flex items-center gap-2 font-semibold transition"
            >
              <FaCopy />

              {copied ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>

        {/* Content */}

        <div className="p-8">

          <p className="text-[17px] leading-9 text-slate-700 whitespace-pre-wrap">
            {answer}
          </p>

        </div>

        {/* Footer */}

        <div className="border-t bg-slate-50 px-8 py-5 flex items-center justify-between">

          <div className="flex items-center gap-3 text-green-600 font-semibold">

            <FaCheckCircle />

            AI response generated successfully

          </div>

          <span className="text-slate-400 text-sm">
            AI Knowledge Inbox
          </span>

        </div>

      </div>

    </div>
  );
}

export default AnswerCard;
import { useState } from "react";
import { FaStickyNote, FaSave } from "react-icons/fa";
import api from "../services/api";

function AddNote({ onSuccess }) {
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  const saveNote = async () => {
    if (!note.trim()) {
      return alert("Please enter a note.");
    }

    try {
      setLoading(true);

      const res = await api.post("/ingest", {
        type: "note",
        content: note,
      });

      alert(res.data.message);

      setNote("");

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-2xl transition-all duration-300">

      <div className="flex items-center gap-3 mb-5">
        <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
          <FaStickyNote size={22} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Add Note
          </h2>

          <p className="text-slate-500 text-sm">
            Save important information for AI retrieval.
          </p>
        </div>
      </div>

      <textarea
        rows={7}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your note here..."
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          p-4
          resize-none
          focus:ring-4
          focus:ring-blue-200
          focus:border-blue-500
          transition
        "
      />

      <div className="flex justify-between items-center mt-3">

        <span className="text-sm text-slate-400">
          {note.length} characters
        </span>

        <button
          onClick={saveNote}
          disabled={loading}
          className="
            flex
            items-center
            gap-2
            bg-blue-600
            hover:bg-blue-700
            disabled:bg-blue-400
            text-white
            px-6
            py-3
            rounded-xl
            font-semibold
            transition-all
            shadow-md
            hover:shadow-lg
          "
        >
          <FaSave />

          {loading ? "Saving..." : "Save Note"}
        </button>

      </div>

    </div>
  );
}

export default AddNote;
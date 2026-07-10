import { useState } from "react";
import { FaLink, FaCloudUploadAlt } from "react-icons/fa";
import api from "../services/api";

function AddUrl({ onSuccess }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const saveUrl = async () => {
    // Empty validation
    if (!url.trim()) {
      return alert("Please enter a URL.");
    }

    // URL validation
    try {
      const parsedUrl = new URL(url);

      if (
        parsedUrl.protocol !== "http:" &&
        parsedUrl.protocol !== "https:"
      ) {
        return alert("Please enter a valid HTTP or HTTPS URL.");
      }
    } catch {
      return alert("Please enter a valid URL.");
    }

    try {
      setLoading(true);

      const res = await api.post("/ingest", {
        type: "url",
        url,
      });

      alert(res.data.message);

      setUrl("");

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

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">

        <div className="bg-green-100 text-green-600 p-3 rounded-xl">
          <FaLink size={22} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Add URL
          </h2>

          <p className="text-slate-500 text-sm">
            Import knowledge directly from a website.
          </p>
        </div>

      </div>

      {/* URL Input */}

      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            saveUrl();
          }
        }}
        placeholder="https://react.dev"
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          p-4
          focus:ring-4
          focus:ring-green-200
          focus:border-green-500
          transition
        "
      />

      {/* Helper Text */}

      <p className="text-sm text-slate-400 mt-3">
        Enter a valid website URL. The content will be extracted,
        chunked, embedded using Gemini AI, and stored in your
        knowledge base.
      </p>

      {/* Button */}

      <div className="flex justify-end mt-6">

        <button
          onClick={saveUrl}
          disabled={loading}
          className="
            flex
            items-center
            gap-2
            bg-green-600
            hover:bg-green-700
            disabled:bg-green-400
            disabled:cursor-not-allowed
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
          <FaCloudUploadAlt />

          {loading ? "Fetching Website..." : "Save URL"}

        </button>

      </div>

    </div>
  );
}

export default AddUrl;
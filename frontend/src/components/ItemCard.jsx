
import {
  FaStickyNote,
  FaGlobe,
  FaExternalLinkAlt,
  FaClock,
  FaDatabase,
} from "react-icons/fa";

function ItemCard({ item }) {
  const formattedDate = new Date(item.createdAt).toLocaleString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  const isNote = item.type === "note";

  return (
    <article className="h-full flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className={`w-8 h-8 shrink-0 rounded-lg flex items-center justify-center ${isNote ? "bg-blue-50 text-blue-600" : "bg-emerald-50 text-emerald-600"}`}>
            {isNote ? <FaStickyNote size={13} /> : <FaGlobe size={13} />}
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-slate-800 truncate">
              {isNote ? "Personal note" : "Saved website"}
            </h3>
            <div className="flex items-center gap-1 text-[11px] text-slate-400">
              <FaClock size={9} />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
        <span className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide ${isNote ? "bg-blue-50 text-blue-700" : "bg-emerald-50 text-emerald-700"}`}>
          {item.type}
        </span>
      </div>
      <div className="px-4 py-3 flex-1">
        {isNote ? (
          <p className="text-slate-600 text-[13px] leading-5 line-clamp-4 whitespace-pre-wrap">
            {item.content}
          </p>
        ) : (
          <>
            <a href={item.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-medium text-xs mb-2 max-w-full">
              <FaExternalLinkAlt size={10} className="shrink-0" />
              <span className="truncate">{item.url}</span>
            </a>
            <p className="text-slate-500 text-[13px] leading-5 line-clamp-3">
              {item.content}
            </p>
          </>
        )}
      </div>
      <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-slate-500 min-w-0">
          <FaDatabase size={10} className="text-indigo-500 shrink-0" />
          <span className="text-[11px] font-medium truncate">
            {isNote ? "Stored as personal knowledge" : "Indexed with AI embeddings"}
          </span>
        </div>
      </div>
    </article>
  );
}

export default ItemCard;

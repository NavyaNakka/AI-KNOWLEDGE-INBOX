// import { FaBookOpen } from "react-icons/fa";
// import useItems from "../hooks/useItems";
// import ItemCard from "./ItemCard";

// function ItemList() {
//   const { items, loading } = useItems();

//   if (loading) {
//     return (
//       <div className="max-w-5xl mx-auto">

//         <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-12 text-center">

//           <div className="flex justify-center mb-6">

//             <div className="h-12 w-12 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>

//           </div>

//           <h2 className="text-2xl font-bold text-slate-700">
//             Loading your knowledge...
//           </h2>

//           <p className="mt-3 text-slate-500">
//             Fetching your saved notes and websites.
//           </p>

//         </div>

//       </div>
//     );
//   }

//   if (items.length === 0) {
//     return (
//       <div className="max-w-5xl mx-auto">

//         <div className="bg-white rounded-3xl border-2 border-dashed border-slate-300 shadow-sm p-16 text-center">

//           <div className="flex justify-center mb-6">

//             <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">

//               <FaBookOpen className="text-blue-600 text-4xl" />

//             </div>

//           </div>

//           <h2 className="text-3xl font-bold text-slate-800">
//             No Knowledge Saved
//           </h2>

//           <p className="mt-4 text-slate-500 text-lg">
//             Start by adding your first note or importing a website.
//           </p>

//         </div>

//       </div>
//     );
//   }

//   return (
//     <div className="max-w-5xl mx-auto">

//       {/* Stats */}

//       <div className="mb-8 bg-white rounded-2xl border border-slate-200 shadow-sm px-6 py-5">

//         <p className="text-slate-600">

//           <span className="font-bold text-2xl text-blue-600">
//             {items.length}
//           </span>

//           <span className="ml-2">
//             knowledge {items.length === 1 ? "item" : "items"} stored in your AI knowledge base.
//           </span>

//         </p>

//       </div>

//       {/* Cards */}

//       <div className="space-y-8">

//         {items.map((item) => (
//           <ItemCard
//             key={item.id}
//             item={item}
//           />
//         ))}

//       </div>

//     </div>
//   );
// }

// export default ItemList;
import { FaBookOpen } from "react-icons/fa";
import useItems from "../hooks/useItems";
import ItemCard from "./ItemCard";

function ItemList() {
  const { items, loading } = useItems();

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-10 text-center">
          <div className="flex justify-center mb-5">
            <div className="h-10 w-10 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
          </div>
          <h2 className="text-lg font-semibold text-slate-700">
            Loading your knowledge...
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Fetching your saved notes and websites.
          </p>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl border-2 border-dashed border-slate-300 p-12 text-center">
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
              <FaBookOpen className="text-blue-600 text-2xl" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-slate-800">
            No knowledge saved
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Start by adding your first note or importing a website.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Stats */}
      <div className="mb-6 bg-white rounded-2xl border border-slate-200 shadow-sm px-5 py-4 text-center">
        <p className="text-sm text-slate-600">
          <span className="font-semibold text-lg text-blue-600">
            {items.length}
          </span>
          <span className="ml-1.5">
            knowledge {items.length === 1 ? "item" : "items"} stored in your AI knowledge base.
          </span>
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
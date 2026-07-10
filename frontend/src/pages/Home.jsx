// import Navbar from "../components/Navbar";
// import AddNote from "../components/AddNote";
// import AddUrl from "../components/AddUrl";
// import AskQuestion from "../components/AskQuestion";
// import ItemList from "../components/ItemList";

// function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

//       <Navbar />

//       <main className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-12">

//         {/* Hero */}
//         <section className="text-center max-w-4xl mx-auto mb-16">

//           <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
//             ✨ Powered by Gemini AI
//           </span>

//           <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800 leading-tight">
//             Your Personal AI
//             <br />
//             Knowledge Inbox
//           </h1>

//           <p className="mt-6 text-lg text-slate-600 leading-8">
//             Save notes, collect useful websites, and ask AI questions over your
//             own knowledge base using Retrieval-Augmented Generation (RAG).
//           </p>

//         </section>

//         {/* Add Note + URL */}
//         <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">

//           <AddNote />

//           <AddUrl />

//         </section>

//         {/* Ask AI */}
//         <section className="mb-14">

//           <AskQuestion />

//         </section>

//         {/* Saved Knowledge */}
//         <section>

//           <div className="mb-8">

//             <h2 className="text-3xl font-bold text-slate-800">
//               📚 Saved Knowledge
//             </h2>

//             <p className="mt-2 text-slate-500">
//               Browse all of your saved notes and imported websites.
//             </p>

//           </div>

//           <ItemList />

//         </section>

//       </main>

//     </div>
//   );
// }

// export default Home;
import Navbar from "../components/Navbar";
import AddNote from "../components/AddNote";
import AddUrl from "../components/AddUrl";
import AskQuestion from "../components/AskQuestion";
import ItemList from "../components/ItemList";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 py-10">
        {/* Hero */}
        <section className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
            Powered by Gemini AI
          </span>

          <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Your personal AI knowledge inbox
          </h1>

          <p className="mt-3 text-sm md:text-base text-slate-500 leading-6">
            Save notes, collect useful websites, and ask AI questions over your
            own knowledge base using retrieval-augmented generation.
          </p>
        </section>

        {/* Add Note + URL */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <AddNote />
          <AddUrl />
        </section>

        {/* Ask AI */}
        <section className="mb-10">
          <AskQuestion />
        </section>

        {/* Saved Knowledge */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-800">
              Saved knowledge
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Browse all of your saved notes and imported websites.
            </p>
          </div>

          <ItemList />
        </section>
      </main>
    </div>
  );
}

export default Home;
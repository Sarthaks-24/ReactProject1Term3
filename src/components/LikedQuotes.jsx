import { useState } from 'react';
import LikedQuote from './LikedQuote';


export default function LikedQuotes({ likedQuotes, onUnlike, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuotes = likedQuotes.filter((q) =>
    q.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    q.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full min-h-[500px] glass rounded-3xl p-6 relative animate-fade-in-up flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onClose}
          className="p-2 glass rounded-full hover:bg-white/10 transition-colors text-slate-300 hover:text-white"
        >
          <span className="text-xl leading-none">←</span>
        </button>
        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Your Collection
        </h2>
        <div className="w-9" />
      </div>

      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-lg opacity-50">🔍</span>
        </div>
        <input
          type="text"
          placeholder="Search by quote or author..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full glass bg-black/20 text-white rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder-slate-400 transition-all"
        />
      </div>

      <div className="flex-1 overflow-y-auto pr-2 space-y-4">
        {likedQuotes.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 text-slate-400">
            <span className="text-5xl mb-3 opacity-50">📭</span>
            <p>You haven't liked any quotes yet.</p>
          </div>
        ) : filteredQuotes.length === 0 ? (
          <div className="text-center py-10 text-slate-400">
            <p>No quotes matching "{searchQuery}"</p>
          </div>
        ) : (
          filteredQuotes.map((quote) => (
            <LikedQuote key={quote.id} quote={quote} onUnlike={onUnlike} />
          ))
        )}
      </div>
    </div>
  );
}

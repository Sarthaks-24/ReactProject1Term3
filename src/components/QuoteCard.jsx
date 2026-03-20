export default function QuoteCard({ quote, loading, isLiked, onLike, onNext }) {
  return (
    <div className="w-full glass rounded-3xl p-6 md:p-10 animate-fade-in-up relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20">
      <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl font-serif">
        "
      </div>

      <div className="min-h-[200px] flex flex-col justify-center relative z-10">
        {loading ? (
          <div className="flex flex-col gap-4 animate-pulse items-center justify-center text-slate-400">
            <span className="text-3xl animate-spin mb-4">⏳</span>
            <p className="text-xl font-medium tracking-wide">Loading quote...</p>
          </div>
        ) : (
          <div key={quote?.id || 'empty'} className="animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-medium leading-relaxed tracking-wide text-slate-100 mb-6 drop-shadow-sm">
              "{quote?.content}"
            </h2>
            <div className="flex items-center gap-3 justify-end">
              <div className="h-[2px] w-8 bg-blue-500 rounded-full"></div>
              <p className="text-lg text-slate-300 font-semibold italic">
                {quote?.author}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-10 flex items-center justify-between border-t border-slate-700/50 pt-6">
        <button
          onClick={onLike}
          disabled={loading || !quote}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 ${
            isLiked 
              ? 'bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/30' 
              : 'glass hover:bg-slate-800 text-slate-300'
          } disabled:opacity-50 disabled:cursor-not-allowed group`}
          aria-label="Like quote"
        >
          <span className={`text-xl ${isLiked ? 'animate-heart' : 'opacity-70 group-hover:scale-110 transition-transform'}`}>
            {isLiked ? '❤️' : '🤍'}
          </span>
          <span className="font-medium">{isLiked ? 'Liked' : 'Like'}</span>
        </button>

        <button
          onClick={onNext}
          disabled={loading}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl transition-all duration-300 shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 disabled:opacity-50 disabled:cursor-not-allowed group font-medium"
        >
          {loading ? (
            <span className="animate-spin text-xl">⏳</span>
          ) : (
            <span className="group-hover:rotate-180 transition-transform duration-500 text-xl">🔄</span>
          )}
          New Quote
        </button>
      </div>
    </div>
  );
}

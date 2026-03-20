import { useState, useEffect } from 'react';
import QuoteCard from './components/QuoteCard';
import LikedQuotes from './components/LikedQuotes';

function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likedQuotes, setLikedQuotes] = useState(() => {
    const saved = localStorage.getItem('likedQuotes');
    return saved ? JSON.parse(saved) : [];
  });
  const [showLiked, setShowLiked] = useState(false);

  useEffect(() => {
    localStorage.setItem('likedQuotes', JSON.stringify(likedQuotes));
  }, [likedQuotes]);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/quotes/random');
      const data = await response.json();
      setQuote({
        id: data.id,
        content: data.quote,
        author: data.author
      });
    } catch (error) {
      console.error(error);
      setQuote({
        id: 'error',
        content: 'Failed to fetch quote. Please try again.',
        author: 'System'
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleLikeQuote = (quoteToLike) => {
    setLikedQuotes(prev => {
      const isLiked = prev.some(q => q.id === quoteToLike.id);
      if (isLiked) {
        return prev.filter(q => q.id !== quoteToLike.id);
      }
      return [...prev, quoteToLike];
    });
  };

  const isCurrentQuoteLiked = quote ? likedQuotes.some(q => q.id === quote.id) : false;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[100px]" />
      </div>

      <header className="w-full max-w-2xl flex justify-between items-center mb-8 px-4">
        <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          <span className="text-xl">✨</span>
          Motivation Flow
        </h1>
        <button
          onClick={() => setShowLiked(!showLiked)}
          className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/10 transition-colors font-medium text-sm"
        >
          <span className={likedQuotes.length > 0 ? 'animate-heart' : 'opacity-50'}>
            {likedQuotes.length > 0 ? '❤️' : '🤍'}
          </span>
          <span className="hidden sm:inline">Collection</span>
          <span className="bg-slate-800 px-2 py-0.5 rounded-full text-xs font-bold text-white ml-1">
            {likedQuotes.length}
          </span>
        </button>
      </header>

      <main className="w-full max-w-2xl relative z-10">
        {showLiked ? (
          <LikedQuotes 
            likedQuotes={likedQuotes} 
            onUnlike={handleLikeQuote} 
            onClose={() => setShowLiked(false)} 
          />
        ) : (
          <QuoteCard
            quote={quote}
            loading={loading}
            isLiked={isCurrentQuoteLiked}
            onLike={() => handleLikeQuote(quote)}
            onNext={fetchQuote}
          />
        )}
      </main>

      <footer className="mt-12 text-center text-slate-500 text-sm">
        Crafted with React & Tailwind CSS
      </footer>
    </div>
  );
}

export default App;

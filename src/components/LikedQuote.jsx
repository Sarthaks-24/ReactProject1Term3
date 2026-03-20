import React from 'react'

function LikedQuote({ quote, onUnlike }) {
  return (
     <div 
              key={quote.id} 
              className="glass p-5 rounded-2xl hover:bg-white/5 transition-colors group relative border border-slate-700/50"
            >
              <p className="text-slate-200 mb-3 pr-8 leading-relaxed">"{quote.content}"</p>
              <p className="text-sm font-medium text-blue-400">- {quote.author}</p>
              
              <button
                onClick={() => onUnlike(quote)}
                className="absolute top-4 right-4 p-2 rounded-full opacity-0 group-hover:opacity-100 hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-all focus:opacity-100"
                aria-label="Remove from likes"
                title="Remove from likes"
              >
                <span>❌</span>
              </button>
            </div>
  )
}

export default LikedQuote
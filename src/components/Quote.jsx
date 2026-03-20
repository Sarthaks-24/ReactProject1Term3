import React from 'react'

function Quote({ quote }) {
  return (
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
  )
}

export default Quote
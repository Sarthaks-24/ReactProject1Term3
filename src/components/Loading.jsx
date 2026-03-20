import React from 'react'

function Loading() {
  return  (
          <div className="flex flex-col gap-4 animate-pulse items-center justify-center text-slate-400">
            <span className="text-3xl animate-spin mb-4">⏳</span>
            <p className="text-xl font-medium tracking-wide">Loading quote...</p>
          </div>
    ) 
}

export default Loading
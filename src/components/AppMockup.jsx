export default function AppMockup() {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 animate-float">
      {/* Outer glow */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-10" />

      {/* Titlebar */}
      <div className="bg-[#18181d] border-b border-white/[0.06] px-4 py-3 flex items-center gap-3 relative z-0">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-[#0f0f13] border border-white/[0.06] text-white/35 text-xs px-6 py-1 rounded font-mono">
            summer_vacation.mp4
          </div>
        </div>
        <div className="w-14 shrink-0" />
      </div>

      {/* App body */}
      <div className="bg-[#0f0f13]">
        {/* Video preview */}
        <div className="relative" style={{ aspectRatio: '16/9' }}>
          {/* Sky gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2035] via-[#1e1830] to-[#0e0e14]" />

          {/* Abstract scene elements */}
          <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-[#1a1208]/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0e0c08]/80 to-transparent" />

          {/* Light leak effect */}
          <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-purple-500/8 rounded-full blur-2xl" />

          {/* Horizon line */}
          <div className="absolute left-0 right-0 bg-gradient-to-r from-transparent via-white/5 to-transparent h-px"
            style={{ top: '60%' }} />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/8 border border-white/15 flex items-center justify-center backdrop-blur-sm">
              <div
                className="border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[13px] border-l-white/70 ml-1"
              />
            </div>
          </div>

          {/* Timestamp overlay */}
          <div className="absolute bottom-3 right-3 flex items-center gap-2">
            <span className="text-[10px] text-white/50 font-mono bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
              00:01:23 / 00:05:47
            </span>
          </div>

          {/* Top-left info */}
          <div className="absolute top-3 left-3">
            <span className="text-[9px] text-white/30 font-mono bg-black/40 px-2 py-0.5 rounded">
              1920×1080 · H.264
            </span>
          </div>
        </div>

        {/* Timeline section */}
        <div className="px-4 pt-3 pb-4 space-y-3">
          {/* Waveform + timeline */}
          <div className="relative h-10 bg-[#0a0a0e] rounded-lg overflow-hidden">
            {/* Waveform background effect */}
            <div className="absolute inset-0 flex items-center gap-px px-2 opacity-25">
              {Array.from({ length: 80 }).map((_, i) => {
                const h = 20 + Math.sin(i * 0.4) * 15 + Math.sin(i * 1.1) * 8 + Math.random() * 10
                return (
                  <div
                    key={i}
                    className="flex-1 bg-white/60 rounded-sm"
                    style={{ height: `${h}%` }}
                  />
                )
              })}
            </div>

            {/* Inactive left region */}
            <div className="absolute inset-y-0 left-0 bg-black/40 border-r border-white/5" style={{ width: '22%' }} />

            {/* Trim region */}
            <div
              className="absolute inset-y-0 bg-red-600/15 border-x-2 border-red-500"
              style={{ left: '22%', width: '50%' }}
            >
              {/* Left handle */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[1px] w-[3px] h-6 bg-red-500 rounded-sm cursor-col-resize" />
              {/* Right handle */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[1px] w-[3px] h-6 bg-red-500 rounded-sm cursor-col-resize" />
              {/* Playhead */}
              <div className="absolute top-0 bottom-0 w-[2px] bg-white/80 shadow-sm shadow-white/30" style={{ left: '38%' }}>
                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full" />
              </div>
            </div>

            {/* Inactive right region */}
            <div className="absolute inset-y-0 right-0 bg-black/40 border-l border-white/5" style={{ width: '28%' }} />

            {/* Time labels */}
            <div className="absolute inset-x-0 bottom-1 flex justify-between px-3 pointer-events-none">
              <span className="text-[9px] text-white/20 font-mono">0:00</span>
              <span className="text-[9px] text-white/20 font-mono">5:47</span>
            </div>
          </div>

          {/* Controls bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="text-xs font-mono">
                <span className="text-white/25 mr-1.5 text-[10px]">IN</span>
                <span className="text-red-400 font-semibold">00:01:14</span>
              </div>
              <div className="text-xs font-mono">
                <span className="text-white/25 mr-1.5 text-[10px]">OUT</span>
                <span className="text-red-400 font-semibold">00:03:58</span>
              </div>
              <div className="text-xs font-mono">
                <span className="text-white/25 mr-1.5 text-[10px]">DUR</span>
                <span className="text-white/50">02:44</span>
              </div>
            </div>

            <button className="flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg shadow-red-600/30 cursor-default">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Export Clip
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

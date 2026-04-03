export function MemberAppVisual() {
  return (
    <div className="flex justify-center">
      <div
        className="rounded-3xl overflow-hidden shadow-2xl w-64 border-4 border-gray-800"
        style={{ backgroundColor: '#1B3A2B' }}
      >
        {/* Status bar */}
        <div className="px-5 pt-4 pb-2 flex justify-between items-center">
          <span className="text-white/40 text-xs">9:41</span>
          <span className="text-white/40 text-xs">●●●</span>
        </div>

        {/* App header */}
        <div className="px-5 pb-4 border-b border-white/10">
          <p className="text-white/40 text-xs uppercase tracking-wide">rungolf.club</p>
          <p className="text-white font-bold text-lg">Elmwood GC</p>
        </div>

        {/* Member card */}
        <div className="mx-4 mt-4 rounded-xl p-4" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
          <p className="text-white/50 text-xs mb-1">John Murphy</p>
          <div className="flex justify-between">
            <div>
              <p className="text-white/40 text-xs">Handicap</p>
              <p className="text-white font-bold text-xl">W14.2</p>
            </div>
            <div className="text-right">
              <p className="text-white/40 text-xs">Purse</p>
              <p className="font-bold text-xl" style={{ color: '#C9963B' }}>€34.00</p>
            </div>
          </div>
        </div>

        {/* Nav buttons */}
        <div className="grid grid-cols-2 gap-2 px-4 mt-4">
          {['Book Tee Time', 'Competitions', 'Top Up Purse', 'My Bookings'].map((label) => (
            <button
              key={label}
              className="rounded-xl p-3 text-center text-xs font-medium text-white"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Bottom safe area */}
        <div className="h-8" />
      </div>
    </div>
  );
}

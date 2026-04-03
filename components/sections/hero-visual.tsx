export function HeroVisual() {
  const slots = [
    { time: "07:00", players: ["J. Murphy", "P. O'Brien", "S. Walsh"], full: true },
    { time: "07:10", players: ["T. Kelly", "D. Ryan"], full: false },
    { time: "07:20", players: ["C. McCarthy", "B. O'Sullivan", "F. Burke", "E. Doyle"], full: true },
    { time: "07:30", players: [], full: false },
    { time: "07:40", players: ["G. Fitzgerald", "H. Quinn"], full: false },
    { time: "07:50", players: ["I. Gallagher", "J. Brennan", "K. Nolan", "L. Sheridan"], full: true },
  ];

  return (
    <div className="relative">
      {/* Floating card shadow */}
      <div
        className="rounded-2xl overflow-hidden shadow-2xl"
        style={{ backgroundColor: "#0f2318" }}
      >
        {/* Card header */}
        <div className="px-5 py-4 flex items-center justify-between border-b border-white/10">
          <div>
            <p className="text-white/40 text-xs uppercase tracking-wide">Tee Sheet</p>
            <p className="text-white font-semibold text-sm">Saturday 5 April 2026</p>
          </div>
          <div
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{ backgroundColor: "rgba(201,150,59,0.2)", color: "#C9963B" }}
          >
            Live
          </div>
        </div>

        {/* Slot rows */}
        <div className="divide-y divide-white/5">
          {slots.map((slot) => (
            <div key={slot.time} className="px-5 py-3 flex items-center gap-4">
              <span className="text-white/60 text-xs font-mono w-10 shrink-0">
                {slot.time}
              </span>
              <div className="flex-1 flex items-center gap-1.5 flex-wrap">
                {slot.players.length === 0 ? (
                  <span className="text-white/20 text-xs italic">Available</span>
                ) : (
                  slot.players.map((p) => (
                    <span
                      key={p}
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: "rgba(45,106,79,0.4)",
                        color: "rgba(255,255,255,0.8)",
                      }}
                    >
                      {p}
                    </span>
                  ))
                )}
              </div>
              <div className="flex gap-1 shrink-0">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor:
                        i < slot.players.length
                          ? "#C9963B"
                          : "rgba(255,255,255,0.1)",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-white/10 flex items-center justify-between">
          <span className="text-white/30 text-xs">18 slots generated</span>
          <span className="text-white/30 text-xs">4 available</span>
        </div>
      </div>

      {/* Floating badge */}
      <div
        className="absolute -bottom-4 -right-4 rounded-xl px-4 py-3 shadow-lg"
        style={{ backgroundColor: "#C9963B" }}
      >
        <p className="text-white text-xs font-semibold">⚡ Sheet opens automatically</p>
      </div>
    </div>
  );
}

export function CompVisual() {
  const entries = [
    { name: 'J. Murphy', handicap: '14.2', status: 'confirmed', time: '09:00' },
    { name: 'P. O\'Brien', handicap: '8.6', status: 'confirmed', time: '09:00' },
    { name: 'S. Walsh', handicap: '21.1', status: 'confirmed', time: '09:10' },
    { name: 'T. Kelly', handicap: '5.4', status: 'waiting', time: '—' },
    { name: 'D. Ryan', handicap: '18.0', status: 'waiting', time: '—' },
  ];

  return (
    <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white max-w-2xl mx-auto">
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between" style={{ backgroundColor: '#1B3A2B' }}>
        <div>
          <p className="text-white/50 text-xs uppercase tracking-wide">Competition</p>
          <p className="text-white font-semibold">Stableford — Saturday 5 April</p>
        </div>
        <div className="text-right">
          <p className="text-white/50 text-xs">Entry fee</p>
          <p className="font-bold" style={{ color: '#C9963B' }}>€10</p>
        </div>
      </div>
      <div className="divide-y divide-gray-50">
        {entries.map((e) => (
          <div key={e.name} className="px-6 py-3 flex items-center gap-4">
            <div className="flex-1">
              <p className="font-medium text-sm text-gray-900">{e.name}</p>
              <p className="text-gray-400 text-xs">Hcp {e.handicap}</p>
            </div>
            <p className="text-gray-500 text-sm font-mono">{e.time}</p>
            <span
              className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
              style={
                e.status === 'confirmed'
                  ? { backgroundColor: '#dcfce7', color: '#166534' }
                  : { backgroundColor: '#fef9c3', color: '#854d0e' }
              }
            >
              {e.status === 'confirmed' ? 'Entered' : 'Waiting list'}
            </span>
          </div>
        ))}
      </div>
      <div className="px-6 py-3 bg-gray-50 flex justify-between text-xs text-gray-400">
        <span>3 confirmed · 2 on waiting list</span>
        <span>Max 36 players</span>
      </div>
    </div>
  );
}

export function HandicapVisual() {
  const members = [
    { name: 'J. Murphy', whs: '14.2', winter: '14.2', mode: 'winter' },
    { name: 'P. O\'Brien', whs: '8.6', winter: '8.6', mode: 'winter' },
    { name: 'S. Walsh', whs: '21.1', winter: '22.0', mode: 'winter' },
    { name: 'T. Kelly', whs: '5.4', winter: '5.4', mode: 'winter' },
    { name: 'D. Ryan', whs: '18.0', winter: '17.5', mode: 'winter' },
  ];

  return (
    <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white max-w-2xl mx-auto">
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between" style={{ backgroundColor: '#1B3A2B' }}>
        <div>
          <p className="text-white/50 text-xs uppercase tracking-wide">Handicap Management</p>
          <p className="text-white font-semibold">Winter Mode — Active</p>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(201,150,59,0.2)', color: '#C9963B' }}>
          Winter 2025/26
        </span>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100 text-xs text-gray-400 uppercase tracking-wide">
            <th className="text-left px-6 py-3">Member</th>
            <th className="text-right px-6 py-3">WHS Index</th>
            <th className="text-right px-6 py-3">Winter Hcp</th>
            <th className="text-center px-6 py-3">Mode</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {members.map((m) => (
            <tr key={m.name} className="hover:bg-gray-50">
              <td className="px-6 py-3 font-medium text-gray-900">{m.name}</td>
              <td className="px-6 py-3 text-right font-mono text-gray-500">{m.whs}</td>
              <td className="px-6 py-3 text-right font-mono font-semibold" style={{ color: '#1B3A2B' }}>{m.winter}</td>
              <td className="px-6 py-3 text-center">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}>
                  Winter
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-6 py-3 bg-gray-50 text-xs text-gray-400">
        5 members shown · Snapshot taken 1 Nov 2025
      </div>
    </div>
  );
}

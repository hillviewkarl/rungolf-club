export function PaymentsVisual() {
  const ledger = [
    { desc: 'Purse top-up', type: 'topup', amount: '+€50.00', date: 'Today' },
    { desc: 'Stableford entry fee', type: 'debit', amount: '-€10.00', date: 'Today' },
    { desc: 'Tee time — Sat 5 Apr', type: 'debit', amount: '-€6.00', date: 'Yesterday' },
    { desc: 'Purse top-up', type: 'topup', amount: '+€20.00', date: '28 Mar' },
    { desc: 'Monthly Medal entry', type: 'debit', amount: '-€10.00', date: '27 Mar' },
  ];

  return (
    <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white max-w-2xl mx-auto">
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between" style={{ backgroundColor: '#1B3A2B' }}>
        <div>
          <p className="text-white/50 text-xs uppercase tracking-wide">Member Purse</p>
          <p className="text-white font-semibold">John Murphy</p>
        </div>
        <div className="text-right">
          <p className="text-white/50 text-xs">Balance</p>
          <p className="text-2xl font-bold" style={{ color: '#C9963B' }}>€44.00</p>
        </div>
      </div>
      <div className="divide-y divide-gray-50">
        {ledger.map((row, i) => (
          <div key={i} className="px-6 py-3 flex items-center gap-4">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs shrink-0"
              style={
                row.type === 'topup'
                  ? { backgroundColor: '#dcfce7', color: '#16a34a' }
                  : { backgroundColor: '#fee2e2', color: '#dc2626' }
              }
            >
              {row.type === 'topup' ? '↑' : '↓'}
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm text-gray-900">{row.desc}</p>
              <p className="text-gray-400 text-xs">{row.date}</p>
            </div>
            <p
              className="font-mono font-semibold text-sm"
              style={{ color: row.type === 'topup' ? '#16a34a' : '#dc2626' }}
            >
              {row.amount}
            </p>
          </div>
        ))}
      </div>
      <div className="px-6 py-3 bg-gray-50 text-xs text-gray-400">
        Powered by Stripe · Funds go directly to your club account
      </div>
    </div>
  );
}

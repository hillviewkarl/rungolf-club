interface Row {
  feature: string;
  rungolf: string | boolean;
  competitor: string | boolean;
  highlight?: boolean;
}

interface Props {
  competitorName: string;
  rows: Row[];
}

function Cell({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full" style={{ backgroundColor: '#dcfce7' }}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full" style={{ backgroundColor: '#fee2e2' }}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M3 3l6 6M9 3l-6 6" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </span>
    );
  }
  return <span className="text-sm text-gray-700">{value}</span>;
}

export function ComparisonTable({ competitorName, rows }: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm min-w-[540px]">
        <thead>
          <tr style={{ backgroundColor: '#1B3A2B' }}>
            <th className="text-left px-6 py-4 text-white/60 font-medium text-xs uppercase tracking-wide w-1/2">
              Feature
            </th>
            <th className="px-6 py-4 text-center w-1/4">
              <span className="text-xs font-bold uppercase tracking-wide" style={{ color: '#C9963B' }}>
                rungolf.club
              </span>
            </th>
            <th className="px-6 py-4 text-center text-white/50 font-medium text-xs uppercase tracking-wide w-1/4">
              {competitorName}
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-50">
          {rows.map((row) => (
            <tr
              key={row.feature}
              className={row.highlight ? 'bg-amber-50/60' : 'hover:bg-gray-50/50'}
            >
              <td className="px-6 py-4 font-medium text-gray-800">
                {row.feature}
                {row.highlight && (
                  <span className="ml-2 text-xs px-1.5 py-0.5 rounded font-semibold" style={{ backgroundColor: '#fef9c3', color: '#854d0e' }}>
                    Key difference
                  </span>
                )}
              </td>
              <td className="px-6 py-4 text-center">
                <Cell value={row.rungolf} />
              </td>
              <td className="px-6 py-4 text-center">
                <Cell value={row.competitor} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

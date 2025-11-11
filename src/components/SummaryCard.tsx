interface SummaryCardProps {
  summary: string[];
}

export function SummaryCard({ summary }: SummaryCardProps) {
  return (
    <div className="bg-[#242424] rounded-lg p-6 shadow-lg border border-[#333]">
      <h2 className="text-white mb-4">Summary</h2>
      <ul className="space-y-3">
        {summary.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-blue-500 mt-1">•</span>
            <span className="text-[#ccc] flex-1">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

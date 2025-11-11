import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

interface SentimentCardProps {
  sentimentScore: number;
  sentimentLabel: string;
  businessImpact: string;
}

export function SentimentCard({ sentimentScore, sentimentLabel, businessImpact }: SentimentCardProps) {
  // Normalize sentiment from -1 to 1 range to 0 to 100 for display
  const normalizedSentiment = ((sentimentScore + 1) / 2) * 100;
  
  const getSentimentColor = (score: number) => {
    if (score >= 0.5) return '#22c55e'; // green-500
    if (score >= 0) return '#f97316'; // orange-500
    return '#ef4444'; // red-500
  };

  const color = getSentimentColor(sentimentScore);

  // Data for the gauge chart
  const data = [
    { name: 'Sentiment', value: normalizedSentiment },
    { name: 'Remaining', value: 100 - normalizedSentiment }
  ];

  return (
    <div className="bg-[#242424] rounded-lg p-6 shadow-lg border border-[#333]">
      <h2 className="text-white mb-6">Sentiment</h2>
      
      {/* Sentiment Gauge */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-48 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
              >
                <Cell fill={color} />
                <Cell fill="#3a3a3a" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
            <div className="text-white" style={{ color }}>{sentimentScore.toFixed(1)}</div>
            <div className="text-[#888] text-sm mt-1">{sentimentLabel.toUpperCase()}</div>
          </div>
        </div>
      </div>

      {/* Business Impact */}
      <div>
        <h3 className="text-white mb-3">Business Impact:</h3>
        <p className="text-[#ccc]">{businessImpact}</p>
      </div>
    </div>
  );
}
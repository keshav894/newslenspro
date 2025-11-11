interface CompanyListItemProps {
  companyName: string;
  ticker: string;
  sentimentScore: number;
  isActive: boolean;
  onClick: () => void;
}

export function CompanyListItem({ companyName, ticker, sentimentScore, isActive, onClick }: CompanyListItemProps) {
  const getSentimentColor = (score: number) => {
    if (score >= 0.5) return 'bg-green-500';
    if (score >= 0) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const formatSentiment = (score: number) => {
    return score > 0 ? `+${score.toFixed(1)}` : score.toFixed(1);
  };

  // Get first letter of company name for logo placeholder
  const logoLetter = companyName.charAt(0);

  return (
    <button
      onClick={onClick}
      className={`w-full p-4 border-b border-[#333] transition-all text-left cursor-pointer ${
        isActive ? 'bg-[#3a5a7c] border-l-4 border-l-blue-500' : 'hover:bg-[#2a2a2a]'
      }`}
    >
      <div className="flex items-start gap-3">
        {/* Logo */}
        <div className="w-10 h-10 rounded-lg bg-[#3a3a3a] flex items-center justify-center flex-shrink-0">
          <span className="text-white">{logoLetter}</span>
        </div>

        {/* Company Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="text-white truncate">{companyName}</h3>
              <p className="text-[#888] text-sm">{ticker}</p>
            </div>

            {/* Sentiment Indicator */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className={`w-3 h-3 rounded-full ${getSentimentColor(sentimentScore)}`} />
              <span className="text-white text-sm">{formatSentiment(sentimentScore)}</span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
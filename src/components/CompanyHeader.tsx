import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

interface CompanyHeaderProps {
  companyName: string;
  ticker: string;
  website: string;
}

export function CompanyHeader({ companyName, ticker, website }: CompanyHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-white">
          {companyName} <span className="text-[#888]">({ticker})</span>
        </h1>
      </div>
      <Button
        asChild
        className="bg-blue-600 hover:bg-blue-700 text-white"
      >
        <a href={website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          Visit Website
          <ExternalLink className="w-4 h-4" />
        </a>
      </Button>
    </div>
  );
}
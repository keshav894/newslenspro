import { useState } from 'react';
import { CompanyListItem } from './components/CompanyListItem';
import { CompanyHeader } from './components/CompanyHeader';
import { SummaryCard } from './components/SummaryCard';
import { SentimentCard } from './components/SentimentCard';
import { NewsArticleCard } from './components/NewsArticleCard';

interface Article {
  title: string;
  source: string;
  date: string;
  thumbnail: string;
  url: string;
}

interface Company {
  companyName: string;
  ticker: string;
  sentimentScore: number;
  sentimentLabel: string;
  industry: string;
  website: string;
  summary: string[];
  businessImpact: string;
  articles: Article[];
}

interface DashboardData {
  companies: Company[];
}

const dashboardData: DashboardData = {
  companies: [
    {
      companyName: "Apple Inc.",
      ticker: "AAPL",
      sentimentScore: 0.7,
      sentimentLabel: "Positive",
      industry: "Technology",
      website: "https://www.apple.com",
      summary: [
        "Apple plans satellite features for iPhones.",
        "Apple to use Google's AI for new Siri.",
        "Apple faces potential £1.5bn UK court loss.",
        "Strong Q4 earnings beat analyst expectations.",
        "New MacBook Pro lineup announced with M3 chips."
      ],
      businessImpact: "Innovative features could enhance Apple's market position and customer satisfaction. However, the potential £1.5bn court loss poses a significant financial risk.",
      articles: [
        {
          title: "Apple expands AI efforts with Google partnership",
          source: "Bloomberg.com",
          date: "Nov 9, 2025",
          thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
          url: "https://www.bloomberg.com/apple-ai"
        },
        {
          title: "Apple faces £1.5bn court battle in UK",
          source: "Reuters.com",
          date: "Nov 8, 2025",
          thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400",
          url: "https://www.reuters.com/apple-court"
        },
        {
          title: "Apple Announces Revolutionary Satellite Features for iPhone 16",
          source: "TechCrunch",
          date: "Nov 7, 2025",
          thumbnail: "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=400",
          url: "https://www.techcrunch.com/apple-satellite"
        },
        {
          title: "Apple Q4 Earnings Exceed Wall Street Expectations",
          source: "CNBC",
          date: "Nov 6, 2025",
          thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
          url: "https://www.cnbc.com/apple-earnings"
        },
        {
          title: "New M3 MacBook Pro: Everything You Need to Know",
          source: "The Verge",
          date: "Nov 5, 2025",
          thumbnail: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
          url: "https://www.theverge.com/apple-m3"
        },
        {
          title: "Apple's Innovation Strategy Reshapes Tech Industry",
          source: "Financial Times",
          date: "Nov 4, 2025",
          thumbnail: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400",
          url: "https://www.ft.com/apple-innovation"
        }
      ]
    },
    {
      companyName: "Takeda Pharmaceutical Co. Ltd.",
      ticker: "TAK",
      sentimentScore: 0.3,
      sentimentLabel: "Mixed",
      industry: "Pharmaceuticals",
      website: "https://www.takeda.com",
      summary: [
        "Takeda announces promising results for new cancer treatment.",
        "Company faces regulatory scrutiny in European markets.",
        "Partnership with biotech firm to develop rare disease therapies.",
        "Q3 revenue shows modest growth in key markets."
      ],
      businessImpact: "Positive clinical trial results and strategic partnerships position Takeda well for future growth. Regulatory challenges in Europe may impact near-term revenue projections.",
      articles: [
        {
          title: "Takeda's New Cancer Drug Shows Promising Phase 3 Results",
          source: "BioPharma Dive",
          date: "Nov 9, 2025",
          thumbnail: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400",
          url: "https://www.biopharma.com/takeda-cancer"
        },
        {
          title: "EU Regulators Question Takeda's Pricing Strategy",
          source: "Reuters.com",
          date: "Nov 7, 2025",
          thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400",
          url: "https://www.reuters.com/takeda-eu"
        },
        {
          title: "Takeda Forms Partnership for Rare Disease Research",
          source: "FierceBiotech",
          date: "Nov 5, 2025",
          thumbnail: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400",
          url: "https://www.fiercebiotech.com/takeda-partnership"
        },
        {
          title: "Takeda Q3 Earnings: Modest Growth Amid Challenges",
          source: "Bloomberg.com",
          date: "Nov 3, 2025",
          thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
          url: "https://www.bloomberg.com/takeda-earnings"
        }
      ]
    },
    {
      companyName: "Alphabet Inc.",
      ticker: "GOOGL",
      sentimentScore: -0.4,
      sentimentLabel: "Negative",
      industry: "Technology",
      website: "https://www.abc.xyz",
      summary: [
        "Alphabet faces antitrust lawsuit from DOJ.",
        "YouTube ad revenue decline continues for third quarter.",
        "Google Cloud shows strong growth despite overall headwinds.",
        "AI investments strain profit margins."
      ],
      businessImpact: "Ongoing legal challenges and declining ad revenue present significant headwinds. However, cloud growth and AI investments may provide long-term competitive advantages.",
      articles: [
        {
          title: "DOJ Expands Antitrust Case Against Google",
          source: "Wall Street Journal",
          date: "Nov 9, 2025",
          thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400",
          url: "https://www.wsj.com/google-antitrust"
        },
        {
          title: "YouTube Ad Revenue Falls 8% in Q3",
          source: "CNBC",
          date: "Nov 8, 2025",
          thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400",
          url: "https://www.cnbc.com/youtube-revenue"
        },
        {
          title: "Google Cloud Gains Market Share Despite Headwinds",
          source: "TechCrunch",
          date: "Nov 6, 2025",
          thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400",
          url: "https://www.techcrunch.com/google-cloud"
        },
        {
          title: "Google's AI Investments Pressure Profit Margins",
          source: "Reuters.com",
          date: "Nov 4, 2025",
          thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
          url: "https://www.reuters.com/google-ai"
        },
        {
          title: "Analysts Downgrade Alphabet Stock Amid Legal Concerns",
          source: "Bloomberg.com",
          date: "Nov 2, 2025",
          thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400",
          url: "https://www.bloomberg.com/alphabet-downgrade"
        }
      ]
    },
    {
      companyName: "Tesla Inc.",
      ticker: "TSLA",
      sentimentScore: 0.2,
      sentimentLabel: "Mixed",
      industry: "Automotive",
      website: "https://www.tesla.com",
      summary: [
        "Tesla expands Gigafactory production capacity in Texas.",
        "Cybertruck deliveries begin with mixed initial reviews.",
        "Competition intensifies in the EV market.",
        "Energy storage division reports record quarter."
      ],
      businessImpact: "Production expansion and energy storage growth are positive indicators. Increased competition and Cybertruck reception uncertainties create moderate risk.",
      articles: [
        {
          title: "Tesla Texas Gigafactory Reaches Full Production Capacity",
          source: "Reuters.com",
          date: "Nov 9, 2025",
          thumbnail: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400",
          url: "https://www.reuters.com/tesla-gigafactory"
        },
        {
          title: "Cybertruck Reviews: Innovation Meets Controversy",
          source: "The Verge",
          date: "Nov 8, 2025",
          thumbnail: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400",
          url: "https://www.theverge.com/cybertruck-review"
        },
        {
          title: "EV Competition Heats Up as Legacy Automakers Launch New Models",
          source: "Bloomberg.com",
          date: "Nov 6, 2025",
          thumbnail: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400",
          url: "https://www.bloomberg.com/ev-competition"
        },
        {
          title: "Tesla Energy Storage Division Posts Record Revenue",
          source: "CNBC",
          date: "Nov 5, 2025",
          thumbnail: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400",
          url: "https://www.cnbc.com/tesla-energy"
        }
      ]
    }
  ]
};

export default function App() {
  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(0);
  const selectedCompany = dashboardData.companies[selectedCompanyIndex];

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex">
      {/* Left Sidebar */}
      <aside className="w-80 bg-[#242424] border-r border-[#333] flex flex-col">
        <div className="p-6 border-b border-[#333]">
          <h1 className="text-white">Companies</h1>
        </div>
        <div className="flex-1 overflow-y-auto">
          {dashboardData.companies.map((company, index) => (
            <CompanyListItem
              key={company.ticker}
              companyName={company.companyName}
              ticker={company.ticker}
              sentimentScore={company.sentimentScore}
              isActive={selectedCompanyIndex === index}
              onClick={() => setSelectedCompanyIndex(index)}
            />
          ))}
        </div>
      </aside>

      {/* Right Content Area */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-8">
          <CompanyHeader
            companyName={selectedCompany.companyName}
            ticker={selectedCompany.ticker}
            website={selectedCompany.website}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <SummaryCard summary={selectedCompany.summary} />
            <SentimentCard
              sentimentScore={selectedCompany.sentimentScore}
              sentimentLabel={selectedCompany.sentimentLabel}
              businessImpact={selectedCompany.businessImpact}
            />
          </div>

          <div className="mt-12">
            <h2 className="text-white mb-6">Top News Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCompany.articles.map((article, index) => (
                <NewsArticleCard key={index} article={article} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
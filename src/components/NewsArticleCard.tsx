import { ImageWithFallback } from './figma/ImageWithFallback';

interface Article {
  title: string;
  source: string;
  date: string;
  thumbnail: string;
  url: string;
}

interface NewsArticleCardProps {
  article: Article;
}

export function NewsArticleCard({ article }: NewsArticleCardProps) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#242424] rounded-lg overflow-hidden shadow-lg border border-[#333] transition-transform hover:scale-105 hover:border-blue-500 block"
    >
      {/* Thumbnail */}
      <div className="aspect-video w-full bg-[#1a1a1a] overflow-hidden">
        <ImageWithFallback
          src={article.thumbnail}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-white mb-3 line-clamp-2">{article.title}</h3>
        <div className="flex items-center gap-2 text-[#888] text-sm">
          <span>{article.source}</span>
          <span>•</span>
          <span>{article.date}</span>
        </div>
      </div>
    </a>
  );
}
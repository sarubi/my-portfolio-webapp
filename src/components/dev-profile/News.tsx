import Link from 'next/link'
import news from '@/data/news'
import NewsList from './NewsList'

const VISIBLE_ITEMS = 5

const News: React.FC = () => {
  return (
    <div id="news" className="news mt-[30px] scroll-mt-[80px]">
      <div className="title font-medium text-[20px]">
        📰 News
      </div>

      <NewsList items={news.slice(0, VISIBLE_ITEMS)} />

      {news.length > VISIBLE_ITEMS && (
        <Link className="text-blue-600 hover:underline text-[14px]" href="/news">
          All news →
        </Link>
      )}
    </div>
  )
}

export default News

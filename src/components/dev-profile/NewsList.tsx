import { NewsItem } from '@/data/news'

const NewsList: React.FC<{ items: NewsItem[] }> = ({ items }) => (
  <ul className="list-disc list-inside">
    {items.map((item, index) => (
      <li key={index} className="mb-[5px]">
        <span className="font-medium">{item.date}:</span> {item.text}
        {item.link && (
          <>
            {' '}
            <a className="text-blue-600 hover:underline" href={item.link.url} target="_blank" rel="noreferrer">
              {item.link.label}
            </a>
          </>
        )}
        {item.suffix && (item.suffix.startsWith('.') ? item.suffix : ` ${item.suffix}`)}
      </li>
    ))}
  </ul>
)

export default NewsList

// Список новостей

import { NewsItem } from './components/NewsItem/NewsItem'

export const NewsItems = ({ items }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '5px' }}>
      {items.map((item, index) => (
        <NewsItem key={index} item={item} />
      ))}
    </div>
  )
}
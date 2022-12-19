// Новость

export const NewsItem = ({ item }) => (
  <div>
    <a
      href={item.link}
      style={{ display: 'flex', alignItems: 'center', columnGap: '5px', textDecoration: 'none', color: 'black' }}
    >
      <img src={item.icon} width='15' height='15' />
      <span>{item.title}</span>
    </a>
  </div>
)
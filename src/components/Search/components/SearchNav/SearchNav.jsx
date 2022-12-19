// Табы категорий поиска над инпутом поиска

export const SearchNav = ({ tabs }) => {
  return (
    <ul style={{ display: 'flex', listStyleType: 'none', columnGap: '10px', alignItems: 'center', paddingLeft: 0 }}>
      {tabs.slice(0, 7).map((tab, index) => (
        <li key={index} style={{ cursor: 'pointer', color: 'blue' }}>{tab}</li>
      ))}
      {
        tabs.length > 7 && <div style={{ cursor: 'pointer', color: 'blue' }}>еще</div>
      }
    </ul>
  )
}
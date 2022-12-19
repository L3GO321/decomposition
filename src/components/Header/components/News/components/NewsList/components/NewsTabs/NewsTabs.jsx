// Табы списка новостей

export const NewsTabs = ({ tabs }) => {
  return (
    <ul style={{ display: 'flex', listStyleType: 'none', columnGap: '10px', alignItems: 'center', paddingLeft: '20px' }}>
      {tabs.map((tab, index) => (
        <li key={index} style={{ cursor: 'pointer', color: 'blue', fontWeight: index === 0 ? 'bold' : 'initial' }}>{tab}</li>
      ))}

      <div style={{ fontSize: '12px', color: 'gray' }}>31 июля, среда 02 32</div>
    </ul>
  )
}
// Список валют и их изменения

const currencies = [
  {
    name: 'USD MOEX',
    price: '63,52',
    change: '+0,09',
  },
  {
    name: 'EUR MOEX',
    price: '70,86',
    change: '+0,14',
  },
  {
    name: 'НЕФТЬ',
    price: '64,90',
    change: '+1,63%',
  },
]

export const Currencies = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', marginTop: '10px' }}>
      {currencies.map((curr, i) => (
        <div key={i}>
          <span style={{ fontWeight: 'bold' }}>{curr.name} </span>
          {curr.price}
          <span style={{ color: 'gray' }}> {curr.change}</span>
        </div>
      ))}

      ...
    </div>
  )
}
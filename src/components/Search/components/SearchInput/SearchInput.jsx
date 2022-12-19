// Сам инпут поиска с логотипом и подсказкой внизу

const logo = 'https://1000logos.net/wp-content/uploads/2021/05/Yandex-logo-2048x1152.png'

export const SearchInput = () => {
  return (
    <div>
      <div style={{ border: '1px solid #dbdb36', display: 'flex', position: 'relative' }}>
        <input type='text' style={{ width: '100%', border: 'none' }} />
        <div style={{ background: '#dbdb36', padding: '10px' }}>Найти</div>

        <img src={logo} width='130' height='80' style={{ position: 'absolute', left: '-140px', bottom: '-20px' }} />
      </div>

      <div>Найдется всё. Например, фаза луны сегодня</div>
    </div>
  )
}
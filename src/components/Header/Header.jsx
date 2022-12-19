// Верхний блок страницы поиска, содержащий новости и рекламу

import { News, Advertisement } from "./components"

export const Header = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
    <News />
    <Advertisement />
  </div>
)
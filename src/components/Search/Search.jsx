// Поисковой блок

import { SearchNav, SearchInput } from "./components"

const tabs = ['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Эфир', 'Больше 7', 'Больше 7']

export const Search = () => {
  return (
    <div style={{ margin: '30px 0' }}>
      <SearchNav tabs={tabs} />
      <SearchInput />
    </div>
  )
}
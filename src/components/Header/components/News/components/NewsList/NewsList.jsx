// Блок новостей

import { NewsTabs, NewsItems } from "./components"

const tabs = ['Сейчас в СМИ', 'в Германии', 'Рекомендуем']

const items = [
  {
    icon: 'https://avatars.dzeninfra.ru/get-ynews-logo/26056/1047-1478692902215-square/logo-square',
    title: 'Путин упростил получение автомобильных номеров',
    link: ''
  },
  {
    icon: 'https://avatars.dzeninfra.ru/get-ynews-logo/26056/1047-1478692902215-square/logo-square',
    title: 'В команде Зеленского раскрыли план реформ на Украине',
    link: ''
  },
  {
    icon: 'https://avatars.dzeninfra.ru/get-ynews-logo/26056/1047-1478692902215-square/logo-square',
    title: '"Турпомощь" прокомментировала гибель десятков россиян в Анталье',
    link: ''
  },
  {
    icon: 'https://avatars.dzeninfra.ru/get-ynews-logo/26056/1047-1478692902215-square/logo-square',
    title: 'Суд закрыл дело Демпартии США против России',
    link: ''
  },
  {
    icon: 'https://avatars.dzeninfra.ru/get-ynews-logo/26056/1047-1478692902215-square/logo-square',
    title: 'На Украине призвали создать ракеты для удара по Москве',
    link: 'asdasdasdas'
  },
]

export const NewsList = () => {
  return (
    <div>
      <NewsTabs tabs={tabs} />
      <NewsItems items={items} />
    </div>
  )
}
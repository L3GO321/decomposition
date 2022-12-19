// Реклама в правом верхнем углу экрана

const advert = {
  icon: 'https://static.dzeninfra.ru/s3/zen-misc/images/ad-campaign/light/img5.png',
  title: 'Работа над ошибками',
  description: 'Смотрите на Яндексе и запоминайте',
  link: 'google.com'
}

export const Advertisement = () => {
  return (
    <div>
      <img src={advert.icon} width='100' height='100' />
      <div>{advert.title}</div>
      <div>{advert.description}</div>
    </div>
  )
}
export default function QA(){
  return (
    <div className="ticketList flex_column main">
      <div className="card filmTitle">
        Вопросы-ответы
      </div>
    <details className="card">
      <summary className=" ticketTitle">
        Что такое Билетопоиск?
      </summary>
      <div className="description card">
      Мы — крупнейший сервис о кино в рунете. У нас вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.
      </div>
    </details>
    <details className="card">
        <summary className=" ticketTitle">
        Какой компании принадлежит Билетопоиск?
        </summary>
        <div className="description card">
        Компания, которой принадлежит Билетопоиск - Билетопоиск.
        </div>
      </details>
      <details className="card">
        <summary className=" ticketTitle">
        Как купить билет на Билетопоиск?
        </summary>
        <div className="description card">
        Чтобы купить билет на Билетопоиск, нужно зайти на сайт билетопоиска, выбрать интересующий фильм и узнать расписание сеансов в ближайшем кинотеатре. Затем нужно выбрать удобный сеанс и места в зале, оплатить билеты онлайн и распечатать электронные билеты или получить их в кассе кинотеатра.
        </div>
      </details>
      <details className="card">
        <summary className=" ticketTitle">
        Как оставить отзыв на Билетопоиск?
        </summary>
        <div className="description card">
        Чтобы оставить отзыв на Билетопоиск, нужно зарегистрироваться на сайте и перейти на страницу фильма, который вы хотите оценить или оставить комментарий. На странице фильма можно выбрать оценку, написать рецензию и дополнительную информацию о фильме. Все отзывы на Билетопоиске проходят модерацию, чтобы обеспечить качество и достоверность информации.
        </div>
      </details>
      </div>
  )
}
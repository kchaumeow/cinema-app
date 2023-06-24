import Image from "next/image"
import {genres} from "../constants";
export default function FilmCard({film}){
  return (
    <div className="filmCard card">
      <Image className="filmImage" src={`${film.posterUrl}`} width={400} height={500}/>
      <div className="filmMetadata flex_column">
        <div className="filmTitle">{film.title}</div>
        <div className="filmDetails">
          <div><span className="descTitle">Жанр: </span>{genres.get(film.genre)}</div>
          <div><span className="descTitle">Год выпуска: </span>{film.releaseYear}</div>
          <div><span className="descTitle">Рейтинг: </span>{film.rating}</div>
          <div><span className="descTitle">Режиссер: </span>{film.director}</div>
        </div>
        <div className="descriptionBlock flex_column">
          <div className="descTitle">Описание</div>
          <div className="description">{film.description}</div>
        </div>
      </div>
    </div>
    
  )
}
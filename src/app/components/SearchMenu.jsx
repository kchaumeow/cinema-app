"use client"
import {genres} from "../constants";
import {getFilmsInCinema, getCinemas} from "../utils"
export default async function SearchMenu(){
  const genresPairs = Array.from(genres.entries());
  const cinemas = await getCinemas();
  const onSearch = (event) => {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append("title", event.target.value);
    console.log(urlSearchParams.get(title));
  }
  return (
    <div className="searchMenu card">
      <form action="search" className="flex_column">
        <label htmlFor="title" >Название</label> 
        <input type="text" name="title" placeholder="Введите название" onChange={(e)=>onSearch(e)}/>
        <label htmlFor="genre">Жанр</label>
        <select name="genre" placeholder="Выберите жанр">
          {genresPairs.map((genre) => <option value={genre[0]}>{genre[1]}</option>)}
        </select>
        <label htmlFor="cinema">Кинотеатр</label>
        <select name="cinema" placeholder="Выберите кинотеатр">
        {cinemas.map((cinema) => <option value={cinema.name}>{cinema.name}</option>)}
        </select>
      </form>
    </div>
  )
}

// async function search(title, genre, cinema){
//   res = [];
//   films = await getFilmsInCinema(cinema.id);
//   return films.filter(film => {
//     film.genre === genre
//   })
// }

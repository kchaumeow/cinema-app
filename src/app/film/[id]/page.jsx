import '../../styles/globals.css'
import Review from "../../components/Review";
import FilmCard from "../../components/FilmCard";
import {getReviews, getFilm} from "../../utils";
export default async function FilmPage(props){
  const film = await getFilm(props.params.id);
  const reviews = await getReviews(film.id);
  return (
    <>
      <FilmCard film={film}/>
      <div className='TicketList flex_column reviewList'>
        {reviews.map((review) => <Review review={review}/>)}
      </div>
    </>
    
  )
}

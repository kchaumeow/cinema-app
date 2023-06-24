import TicketCard from './components/TicketCard'
import SearchMenu from './components/SearchMenu'
import {getFilms} from "./utils"
import './styles/globals.css'
export default async function Home(){
  const films = await getFilms();
  return (
    <div className='homepage'>
      <SearchMenu/>
      <div className='ticketList flex_column'>
        {films.map((film) => <TicketCard key={film.id} film={film}/>)}
      </div>
    </div>
  )
}


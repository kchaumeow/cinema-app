import Image from "next/image"
import Link from "next/link"
import {genres} from "../constants"
export default function TicketCard({film}){
  return (
    <Link href={`/film/${film.id}`}>
      <div className="ticketCard card">
        <Image alt={`${film.title} poster`} className="ticketImage" src={`${film.posterUrl}`} width={100} height={120}/>
        <div className="filmMetadata flex_column">
          <div className="ticketTitle">{film.title}</div>
          <div className="filmGenre">{genres.get(film.genre)}</div>
        </div>
      </div>
    </Link>
  )
}


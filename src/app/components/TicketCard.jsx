import Image from 'next/image'
import Link from 'next/link'
import { genres } from '../constants'
import TicketControl from './TicketControl'
import { useSelector } from 'react-redux'
export default function TicketCard({
    film,
    inCart = false,
    deleteFilmCallback,
}) {
    const ticketCount = useSelector((state) => state.ticketSlice[film.id])

    return (
        <div className="ticketCard card dflex">
            <Link href={`/film/${film.id}`}>
                <Image
                    alt={`${film.title} poster`}
                    className="border_radius"
                    src={`${film.posterUrl}`}
                    width={100}
                    height={120}
                />
            </Link>
            <div className="full_width flex_justify_between">
                <Link href={`/film/${film.id}`}>
                    <div className="filmMetadata flex_column">
                        <div className="ticketTitle">{film.title}</div>
                        <div className="filmGenre">
                            {genres.get(film.genre)}
                        </div>
                    </div>
                </Link>
                <div className="controlls dflex">
                    <TicketControl
                        filmId={film.id}
                        deleteFilmCallback={deleteFilmCallback}
                        ticketCount={ticketCount}
                    />
                    {inCart && (
                        <button onClick={() => deleteFilmCallback(film.id)}>
                            <Image
                                alt="delete tickets"
                                src="/images/x.svg"
                                width={20}
                                height={20}
                            />
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

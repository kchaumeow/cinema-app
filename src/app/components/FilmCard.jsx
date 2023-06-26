'use client'
import Image from 'next/image'
import { genres } from '../constants'
import { useSelector } from 'react-redux'
import TicketControl from './TicketControl'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setTicketIds } from '../store/ticketSlice'
export default function FilmCard({ film }) {
    const dispatch = useDispatch()
    useEffect(() => {
        const Ids = [film.id]
        dispatch(setTicketIds(Ids))
    }, [])
    const ticketCount = useSelector((state) => state.ticketSlice[film.id])
    return (
        <div className="filmCard card dflex">
            <Image
                alt="filmImage"
                className="border_radius"
                src={`${film.posterUrl}`}
                width={400}
                height={500}
            />
            <div className="filmMetadata flex_column">
                <div className="flex_justify_between">
                    <div className="filmTitle">{film.title}</div>
                    <TicketControl filmId={film.id} ticketCount={ticketCount} />
                </div>
                <div className="filmDetails">
                    <div>
                        <span className="descTitle">Жанр: </span>
                        {genres.get(film.genre)}
                    </div>
                    <div>
                        <span className="descTitle">Год выпуска: </span>
                        {film.releaseYear}
                    </div>
                    <div>
                        <span className="descTitle">Рейтинг: </span>
                        {film.rating}
                    </div>
                    <div>
                        <span className="descTitle">Режиссер: </span>
                        {film.director}
                    </div>
                </div>
                <div className="filmMetadata flex_column">
                    <div className="descTitle">Описание</div>
                    <div className="description full_width">{film.description}</div>
                </div>
            </div>
        </div>
    )
}

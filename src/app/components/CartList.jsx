'use client'
import TicketCard from './TicketCard'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import TicketsSum from './TicketsSum'
export default function CartList({ initialFilms, deleteFilmCallback }) {
    const cartFilmsIds = useSelector((state) =>
        Object.entries(state.ticketSlice)
            .filter(([, ticketCount]) => ticketCount !== 0)
            .map(([filmId]) => filmId)
    )
    const cartFilms = initialFilms.filter((film) =>
        cartFilmsIds.includes(film.id)
    )
    return (
        <div className="ticketList flex_column flex_justify_between">
            <div className='innerCartList flex_column'>
            {cartFilms.length > 0 ? (
                cartFilms.map((film) => (
                    <TicketCard
                        deleteFilmCallback={deleteFilmCallback}
                        inCart={true}
                        key={film.id}
                        film={film}
                    />
                ))
            ) : (
                <div className="flex_column ticketsCount">
                    <Image
                        alt="ticketImage"
                        src="/images/big_cart.svg"
                        width={350}
                        height={350}
                    />
                    <div className="filmTitle">У вас пока нет билетов...</div>
                </div>
            )}
            </div>
            {cartFilms.length > 0 && <TicketsSum/>} 
        </div>
    )
}

import { useDispatch } from 'react-redux'
import Image from 'next/image'
import { addTicket, removeTicket } from '../store/ticketSlice'
export default function TicketControl({
    filmId,
    ticketCount,
    deleteFilmCallback,
}) {
    const dispatch = useDispatch()
    function onDelete() {
        if (ticketCount === 1 && deleteFilmCallback) {
            deleteFilmCallback(filmId)
        } else {
            dispatch(removeTicket(filmId))
        }
    }
    const disableRevome = ticketCount === 0
    const disableAdd = ticketCount === 30
    const minusPicture = disableRevome
        ? '/images/minus_inactive.svg'
        : '/images/minus_active.svg'
    const plusPicture = disableAdd
        ? '/images/plus_inactive.svg'
        : '/images/plus_active.svg'
    return (
        <div className="TicketControl dflex">
            <button onClick={onDelete} disabled={disableRevome}>
                <Image
                    alt="button-"
                    src={minusPicture}
                    width={20}
                    height={20}
                />
            </button>
            <div>{ticketCount}</div>
            <button
                onClick={() => dispatch(addTicket(filmId))}
                disabled={disableAdd}
            >
                <Image alt="button+" src={plusPicture} width={20} height={20} />
            </button>
        </div>
    )
}

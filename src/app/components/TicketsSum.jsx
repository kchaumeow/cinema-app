'use client'
import { useSelector } from 'react-redux'
export default function TicketsSum() {
    const ticketsCount = useSelector((state) =>
        Object.entries(state.ticketSlice).reduce(
            (a, [, ticketCount]) => a + ticketCount,
            0
        )
    )
    return (
        <div className="ticketsCount flex_justify_between card">
            <div className='descTitle'>Итого билетов:</div>
            <div>{ticketsCount}</div>
        </div>
    )
}

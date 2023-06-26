'use client'
import { useSelector } from 'react-redux'
export default function CartState() {
    const ticketsCount = useSelector((state) =>
        Object.entries(state.ticketSlice).reduce(
            (a, [, ticketCount]) => a + ticketCount,
            0
        )
    )
    return ticketsCount > 0 && <div className='cartInfo'>{ticketsCount}</div>
}

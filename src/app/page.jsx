import TicketList from './components/TicketList'
import SearchMenu from './components/SearchMenu'
import { getFilms } from './utils'
import { getCinemas } from './utils'
import './styles/globals.css'
export default async function Home() {
    const cinemas = await getCinemas()
    const films = await getFilms()
    return (
        <div className="flex_justify_between">
            <SearchMenu cinemas={cinemas} />
            <TicketList initialFilms={films} />
        </div>
    )
}

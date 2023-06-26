import { getFilms } from '../utils'
import CheckDeleted from '../components/CheckDeleted'
export default async function CartPage() {
    const films = await getFilms()
    return (
        <div className='cartPage flex_column'>
            <CheckDeleted films={films} />
        </div>
    )
}

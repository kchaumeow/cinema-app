'use client'
import { genres } from '../constants'
import { useCallback } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
export default function SearchMenu({ cinemas }) {
    const router = useRouter()
    const genresPairs = Array.from(genres.entries())
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    )
    const onSearchTitle = (event) => {
        router.push(
            pathname + '?' + createQueryString('title', event.target.value)
        )
    }
    const onSearchGenre = (event) => {
        router.push(
            pathname + '?' + createQueryString('genre', event.target.value)
        )
    }
    const onSearchCinema = (event) => {
        router.push(
            pathname + '?' + createQueryString('cinema', event.target.value)
        )
    }

    return (
        <div className="searchMenu card">
            <form
                className="flex_column"
                onSubmit={(event) => event.preventDefault()}
            >
                <label htmlFor="title" className='description'>Название</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Введите название"
                    onChange={(e) => onSearchTitle(e)}
                />
                <label htmlFor="genre" className='description'>Жанр</label>
                <select name="genre" onChange={(e) => onSearchGenre(e)}>
                    <option hidden>
                        Выберите жанр
                    </option>
                    <option value="">
                        Не выбран
                    </option>
                    {genresPairs.map((genre) => (
                        <option key={genre[0]} value={genre[0]}>
                            {genre[1]}
                        </option>
                    ))}
                </select>
                <label htmlFor="cinema" className='description'>Кинотеатр</label>
                <select name="cinema" onChange={(e) => onSearchCinema(e)}>
                    <option hidden>
                        Выберите кинотеатр
                    </option>
                    <option value="">
                        Не выбран
                    </option>
                    {cinemas.map((cinema) => (
                        <option key={cinema.id} value={cinema.id}>
                            {cinema.name}
                        </option>
                    ))}
                </select>
            </form>
        </div>
    )
}

// async function search(title, genre, cinema){
//   res = [];
//   films = await getFilmsInCinema(cinema.id);
//   return films.filter(film => {
//     film.genre === genre
//   })
// }

'use client'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteFilm as deleteFilmAction } from '../store/ticketSlice'
import CartList from './CartList'
import DeleteModal from './DeleteModal'
export default function CheckDeleted({ films }) {
    const dispatch = useDispatch()
    const [deletedFilmId, setDeletedFilmId] = useState('')
    const deleteFilm = () => {
        dispatch(deleteFilmAction(deletedFilmId))
        setDeletedFilmId('')
    }
    const deleteFilmCallback = (deletedFilmId) => {
        setDeletedFilmId(deletedFilmId)
    }
    return (
        <>
            <CartList
                initialFilms={films}
                deleteFilmCallback={deleteFilmCallback}
            />
            <DeleteModal
                className="dialog back-dialog"
                show={deletedFilmId !== ''}
                onSubmit={deleteFilm}
                onClose={() => setDeletedFilmId('')}
            />
        </>
    )
}

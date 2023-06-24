"use client"
import TicketCard from "./TicketCard";
import {useState, useEffect, useMemo} from "react";
import {getFilms, getFilmsInCinema} from "../utils";
import { useSearchParams } from 'next/navigation';
export default function TicketList({initialFilms}){
  const [films,setFilms] = useState(initialFilms);
  const searchParams = useSearchParams();
  const filmTitle = searchParams.get("title");
  const filmGenre = searchParams.get("genre");
  const filmCinema = searchParams.get("cinema");
  const [currCinema, setCurrCinema] = useState(filmCinema);
  // title or genre change
  const filteredFilms = useMemo(()=>{
    let films_copy = [...films];
    if (filmGenre !== null && filmGenre.length > 0){
      films_copy = films_copy.filter(film => {
        return film.genre === filmGenre;
      });
    }
    if (filmTitle !== null && filmTitle.length > 0){
      films_copy = films_copy.filter(film => {
        return film.title.includes(filmTitle);
      });
    }
    return films_copy;
  }, [filmTitle, filmGenre, currCinema]);
  // cinema change
  useEffect(() => {
    async function fetchFilms(){
      let filmsInCinemas;
      if (filmCinema.length > 0){
        filmsInCinemas = await getFilmsInCinema(filmCinema);
      } else {
        filmsInCinemas = await getFilms();
      }
      setFilms(filmsInCinemas);
      setCurrCinema(filmCinema);
    }
    if (filmCinema !== null){
      fetchFilms();
    }
  }, [filmCinema]);

  return (
    <div className='ticketList flex_column'>
      {filteredFilms.map((film) => <TicketCard key={film.id} film={film}/>)}
    </div>
  )
}
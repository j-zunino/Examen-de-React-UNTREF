import { useState, useEffect } from 'react';
import trailerflixData from '../data/trailerflix.json';

export default function useGetFilms() {
    const [filmList, setFilmList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            setFilmList(trailerflixData);
        } catch (err) {
            setError(true);
        }
    }, []);

    return { filmList, error };
}

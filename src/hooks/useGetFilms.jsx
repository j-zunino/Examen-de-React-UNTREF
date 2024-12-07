import { useState, useEffect } from 'react';

export default function useGetFilms() {
    const [filmList, setFilmList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data/trailerflix.json')
            .then((response) => response.json())
            .then((data) => {
                setFilmList(data);
            })
            .catch((error) => {
                console.error('Error:', error);
                setError(error);
            });
        // try {
        //     setFilmList(trailerflixData);
        // } catch (err) {
        //     setError(err);
        // }
    }, []);

    return { filmList, error };
}

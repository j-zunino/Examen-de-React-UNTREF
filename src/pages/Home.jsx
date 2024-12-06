import { useState, useEffect } from 'react';
import trailerflixData from '../data/trailerflix.json';

export default function Home() {
    const [filmList, setFilmList] = useState([]);
    const [error, setError] = useState(null);
    const groupedFilms = {};

    useEffect(() => {
        try {
            setFilmList(trailerflixData);
        } catch (err) {
            setError(true);
        }
    }, []);

    filmList.forEach((film) => {
        const genre = film.gen;
        if (!groupedFilms[genre]) {
            groupedFilms[genre] = [];
        }
        groupedFilms[genre].push(film);
    });

    const generos = [
        'Ciencia Ficción',
        'Drama',
        'Suceso Real',
        'Suspenso',
        'Fantasía',
        'Familia',
        'Acción',
        'Terror',
        'Aventura'
    ].sort();

    return error ? (
        <article className="container loading">
            <div className="error">
                <h1>La función está demorada</h1>
                <p>Estamos haciendo algunos ajustes 🍿</p>
                <p>Intenta nuevamente en algunos instantes... 🎞</p>
            </div>
        </article>
    ) : (
        <>
            {/* TODO: useNavigate */}
            {generos.map(
                (genre) =>
                    groupedFilms[genre] && (
                        <article className="container loading" key={genre}>
                            <article className="genero">
                                <h2>{genre}</h2>
                            </article>
                            {groupedFilms[genre].map((film) => (
                                <div className="card" key={film.id}>
                                    <a href="">
                                        <div className="card-picture">
                                            <img
                                                src={film.poster}
                                                alt={film.titulo}
                                                title={film.titulo}
                                            />
                                        </div>
                                        <div className="card-bottom">
                                            <p className="card-bottom-title">
                                                {film.titulo}
                                            </p>
                                            <p>{film.categoria}</p>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </article>
                    )
            )}
        </>
    );
}

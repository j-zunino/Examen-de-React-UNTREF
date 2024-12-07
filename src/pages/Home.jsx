import { Link } from 'react-router-dom';
import useGetFilms from '../hooks/useGetFilms';

export default function Home() {
    const { filmList, error } = useGetFilms();
    const groupedFilms = {};

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
                        <article className="container" key={genre}>
                            <article className="genero">
                                <h2>{genre}</h2>
                            </article>
                            {groupedFilms[genre].map((film) => (
                                <div className="card" key={film.id}>
                                    <Link to={`/movie/${film.id}`}>
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
                                    </Link>
                                </div>
                            ))}
                        </article>
                    )
            )}
        </>
    );
}

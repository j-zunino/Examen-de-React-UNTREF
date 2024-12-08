import { useNavigate } from 'react-router-dom';
import useGetFilms from '../hooks/useGetFilms';
import Card from '../components/Card';

export default function Home() {
    const { filmList, error } = useGetFilms();
    const groupedFilms = {};
    const navigate = useNavigate();

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

    const handleClick = (id) => {
        navigate(`/movie/${id}`);
    };

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
            {generos.map(
                (genre) =>
                    groupedFilms[genre] && (
                        <article className="container" key={genre}>
                            <article className="genero">
                                <h2>{genre}</h2>
                            </article>
                            {groupedFilms[genre].map((film) => (
                                <Card
                                    key={film.id}
                                    film={film}
                                    handleClick={handleClick}
                                />
                            ))}
                        </article>
                    )
            )}
        </>
    );
}

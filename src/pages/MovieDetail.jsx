import { useParams } from 'react-router-dom';
import useGetFilms from '../hooks/useGetFilms';

export default function MovieDetail() {
    const { filmList } = useGetFilms();
    const { id } = useParams();

    if (!filmList || filmList.length === 0) {
        return <h1>Cargando...</h1>;
    }

    const film = filmList.find((film) => String(film.id) === String(id));

    return (
        <>
            {film ? (
                <>
                    <h1 style={{ marginTop: 45 }}>Detalles de la película</h1>
                    <div className="movie-details">
                        <div className="movie-poster">
                            <img src={film.poster} alt="" />
                        </div>
                        <div className="movie-info">
                            <h2>{film.titulo}</h2>
                            <p>
                                <strong>Resumen: </strong>
                                {film.resumen}
                            </p>
                            <iframe
                                width="560"
                                height="315"
                                src={film.trailer}
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                            <p>
                                <strong>Reparto: </strong>
                                {film.reparto}
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                <h1>Película no encontrada</h1>
            )}
        </>
    );
}

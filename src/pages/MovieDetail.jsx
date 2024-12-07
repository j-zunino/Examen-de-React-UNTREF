import { useNavigate, useParams } from 'react-router-dom';
import useGetFilms from '../hooks/useGetFilms';

export default function MovieDetail() {
    const { filmList } = useGetFilms();
    const { id } = useParams();
    const navigate = useNavigate();

    const film = filmList.find((film) => String(film.id) === String(id));

    return (
        <>
            {!film ? (
                <h1>Película no encontrada</h1>
            ) : (
                <>
                    <h4
                        onClick={() => navigate('/')}
                        style={{ marginTop: 60, marginBottom: 0 }}
                    >
                        Volver al inicio
                    </h4>
                    <h1 style={{ marginTop: 0 }}>Detalles de la película</h1>
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
            )}
        </>
    );
}

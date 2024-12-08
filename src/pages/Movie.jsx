import { useNavigate, useParams } from 'react-router-dom';
import useGetFilms from '../hooks/useGetFilms';
import MovieDetails from '../components/MovieDetails';

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
                    <MovieDetails id={id} film={film} />
                </>
            )}
        </>
    );
}

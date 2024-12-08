export default function MovieDetail({ id, film }) {
    return (
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
    );
}

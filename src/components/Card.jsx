export default function Card({ film, handleClick }) {
    return (
        <div onClick={() => handleClick(film.id)} className="card">
            <div className="card-picture">
                <img src={film.poster} alt={film.titulo} title={film.titulo} />
            </div>
            <div className="card-bottom">
                <p className="card-bottom-title">{film.titulo}</p>
                <p>{film.categoria}</p>
            </div>
        </div>
    );
}

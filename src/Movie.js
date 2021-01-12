import React from "react";
import PropTypes from "prop-types";
// it doesnt need to use state

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <div class="movies_movie">
            <label></label>
            <img src = {poster} alt = {title} title = {title} />
            <div class="movie__data">
                <h3 class="movie__title"> {title} </h3>
                <h5 class="movie__year">{year}</h5>
                <ul className = "movie__genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genres__genre">
                            { genre }
                        </li>
                    ))}
                </ul>
                <p class="movie__summary">{summary}</p>
            </div>
        </div>
        );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
import React from "react";
import PropTypes from "prop-types";
// it doesnt need to use state

function Movie({ id, year, title, summary, poster }) {
    return <div>
            <h1> {title} </h1>
            <p>{year}</p>
        </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;
import React from 'react';
import axios from 'axios';
import Movie from "./components/Movie";
import "./Home.css";

class Home extends React.Component {    // class component

  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {   // async를 사용해야 await를 사용할 수 있다. async는 비동기를 의미.
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {    // automatically compile, 'class' html tag attribute is confused with 'Home class'
    const { isLoading, movies } = this.state;
    return (
    <section className = "container">
      {isLoading ? (<div className="loader">
          <span className = "loader__text">Loading...</span>
        </div>
      ) : (
        <div className = "movies">
          {movies.map( movie => {
            console.log(movie);
            return <Movie
              key = {movie.id}
              id = {movie.id}
              year = {movie.year}
              title = {movie.title}
              summary = {movie.summary}
              poster = {movie.medium_cover_image}
              genres = {movie.genres}
            />
        })}
        </div>
      )}
    </section>
    );
  }
}

export default Home;
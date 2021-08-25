import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
  state = {movies: getMovies()};

  handleDelete = id => {
    const movies = this.state.movies.filter(movie => movie._id !== id);
    this.setState({movies});
  };

  showMessage = () => {
    const length = this.state.movies.length;
    return length > 0
      ? `Showing ${length} movies in the database.`
      : 'There are no movies in the database.';
  };

  render() {
    const {length: count} = this.state.movies;
    if (count === 0) return <p>There are no movies in the database</p>;

    return (
      <React.Fragment>
        <p className="pt-3">Showing {count} movies in the database.</p>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie._id)}
                    className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;

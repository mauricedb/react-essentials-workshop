import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const moviesApiUrl =
  "https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies";

export function MovieTable() {
  const [movies] = useFetch<Movie[]>(moviesApiUrl, []);

  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Title</th>
          <th style={{ width: 1 }}>Edit</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.title}</td>
            <td>
              <Link to={`/movie/${movie.id}`} className="btn btn-primary">
                Edit
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

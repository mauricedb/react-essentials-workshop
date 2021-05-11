import React from "react";
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
              <button
                className="btn btn-primary"
                onClick={() => {
                  alert(`Edit ${movie.title}`);
                }}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

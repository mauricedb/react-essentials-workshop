import React, { useState } from "react";

export function MovieTable() {
  const [movies, setMovies] = useState([
    { id: 238, title: "The Godfather" },
    { id: 424, title: "Schindler's List" },
  ]);

  return (
    <table className="table table-striped">
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

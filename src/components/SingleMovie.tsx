import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";

const moviesApiUrl =
  "https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies";

export function SingleMovie() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useFetch<Movie | null>(
    `${moviesApiUrl}/${id}`,
    null
  );

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(JSON.stringify(movie, null, 2));
      }}
    >
      <div className="mb-3">
        <label className="form-label">Title:</label>
        <input
          className="form-control"
          value={movie.title}
          onChange={(e) => setMovie({ ...movie, title: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Overview:</label>
        <textarea
          className="form-control"
          rows={5}
          value={movie.overview}
          onChange={(e) => setMovie({ ...movie, overview: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Release date:</label>
        <input
          className="form-control"
          value={movie.release_date}
          onChange={(e) => setMovie({ ...movie, release_date: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Vote average:</label>
        <input
          className="form-control"
          value={movie.vote_average}
          onChange={(e) =>
            setMovie({ ...movie, vote_average: +e.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

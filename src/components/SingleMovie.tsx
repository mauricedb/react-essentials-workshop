import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";

const moviesApiUrl =
  "https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies";

export function SingleMovie() {
  const { id } = useParams<{ id: string }>();
  const [movie] = useFetch<Movie | null>(`${moviesApiUrl}/${id}`, null);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Title:</label>
        <div>{movie.title}</div>
      </div>
      <div className="mb-3">
        <label className="form-label">Overview:</label>
        <div>{movie.overview}</div>
      </div>
      <div className="mb-3">
        <label className="form-label">Release date:</label>
        <div>{movie.release_date}</div>
      </div>
      <div className="mb-3">
        <label className="form-label">Vote average:</label>
        <div>{movie.vote_average}</div>
      </div>
    </form>
  );
}

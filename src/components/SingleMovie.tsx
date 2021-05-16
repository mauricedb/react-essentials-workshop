import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { movieSchema } from "../schemas/movieSchema";
import { Movie } from "../types/movie";
import { FormInput } from "./FormInput";
import { FormTextArea } from "./FormTextArea";

const moviesApiUrl =
  "https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies";

export function SingleMovie() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useFetch<Movie | null>(
    `${moviesApiUrl}/${id}`,
    null
  );
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  useEffect(() => {
    if (movie) {
      const validationResult = movieSchema.safeParse(movie);

      if (validationResult.success) {
        setErrors({});
      } else {
        setErrors(validationResult.error.flatten().fieldErrors);
      }
    }
  }, [movie]);

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
      <FormInput
        label="Title:"
        value={movie.title}
        onChange={(e) => setMovie({ ...movie, title: e.target.value })}
        errors={errors.title}
      />
      <FormTextArea
        label="Overview:"
        value={movie.overview}
        onChange={(e) => setMovie({ ...movie, overview: e.target.value })}
        rows={5}
      />
      <FormInput
        label="Release date:"
        value={movie.release_date}
        onChange={(e) => setMovie({ ...movie, release_date: e.target.value })}
        errors={errors.release_date}
      />
      <FormInput
        label="Vote average:"
        value={movie.vote_average}
        onChange={(e) => setMovie({ ...movie, vote_average: +e.target.value })}
        errors={errors.vote_average}
      />

      <div className="mb-3">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

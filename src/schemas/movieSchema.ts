import { z } from "zod";

const firstMovieDate = new Date(1878, 0, 1);

export const movieSchema = z.object({
  id: z.number(),
  overview: z.string(),
  poster_path: z.string(),
  release_date: z.string().refine((value) => {
    if (value) {
      const releaseDate = new Date(Date.parse(value));

      return releaseDate > firstMovieDate;
    }
  }, "The first movie was made in 1878"),
  title: z.string().nonempty("The title is required"),
  vote_average: z.number().min(0).max(10),
});

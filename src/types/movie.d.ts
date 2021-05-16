import { z } from "zod";
import { movieSchema } from "../schemas/movieSchema";

export type Movie = z.infer<typeof movieSchema>;

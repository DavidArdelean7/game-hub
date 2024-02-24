import { Game } from "../hooks/useGenres";

export interface Genre {
  games: Game[];
  id: number;
  image_background: string;
  name: string;
  slug: string;
}

import genres from "../data/genres";

interface Game {
  id: number;
  slug: string;
  name: string;
}

export interface Genre {
  games: Game[];
  id: number;
  image_background: string;
  name: string;
  slug: string;
}

//const useGenres = ()=>useData<Genre>('/genres');
const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;

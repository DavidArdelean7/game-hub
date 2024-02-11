import useData from "./useData";

interface Game{
    id:number;
    slug:string;
    name:string;
}

export interface Genre{
    games: Game[];
    id:number;
    image_background:string;
    name:string;
    slug:string;
}

const useGenres = ()=>useData<Genre>('/genres');

export default useGenres;
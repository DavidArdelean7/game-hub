import { Image } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, error } = useGenres();
  return (
    <ul>
      {error && <p>error.message</p>}
      {data.map((genre) => (
        <li key={genre.id}>
          <Image boxSize={10} src={genre.image_background} />
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default GenreList;

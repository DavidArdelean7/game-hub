import { Image } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

const Aside = () => {
  const { genres, error } = useGenres();
  return (
    <ul>
      {error && <p>error.message</p>}
      {genres.map((genre) => (
        <li key={genre.id}>
          <Image boxSize={10} src={genre.image_background} />
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default Aside;

import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatforms from "../hooks/usePlatforms";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: platforms } = usePlatforms();
  const platformName = platforms.results.find(
    (p) => p.id === gameQuery.platformId
  )?.name;

  const { data: genres } = useGenres();
  const genreName = genres.results.find(
    (g) => g.id === gameQuery.genreId
  )?.name;

  const heading = `${platformName || ""} ${genreName || ""}`;
  return (
    <Heading fontSize="5xl" paddingBottom={5} as="h1">
      {heading + " Games"}
    </Heading>
  );
};

export default GameHeading;

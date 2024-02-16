import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatforms from "../hooks/usePlatforms";
import useGenres from "../hooks/useGenres";
import useDataById from "../hooks/useDataById";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const platformName = useDataById(usePlatforms, gameQuery.platformId)?.name;

  const genreName = useDataById(useGenres, gameQuery.genreId)?.name;

  const heading = `${platformName || ""} ${genreName || ""}`;
  return (
    <Heading fontSize="5xl" paddingBottom={5} as="h1">
      {heading + " Games"}
    </Heading>
  );
};

export default GameHeading;

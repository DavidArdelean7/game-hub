import { Heading } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import useGenres from "../hooks/useGenres";
import useDataById from "../hooks/useDataById";
import useGameQueryStore from "../gameQueryStore";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genreName = useDataById(useGenres, genreId)?.name;

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platformName = useDataById(usePlatforms, platformId)?.name;

  const heading = `${platformName || ""} ${genreName || ""}`;
  return (
    <Heading fontSize="5xl" paddingBottom={5} as="h1">
      {heading + " Games"}
    </Heading>
  );
};

export default GameHeading;

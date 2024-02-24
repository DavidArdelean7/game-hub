import { Show, GridItem, HStack, Box } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortingFilter from "../components/SortingFilter";

const GameListing = () => {
  return (
    <>
      <Show above="lg">
        <GridItem area="aside" paddingX={2}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingX={{ base: 3, md: 10 }}>
          <GameHeading />
          <HStack>
            <PlatformSelector />
            <SortingFilter />
          </HStack>

          <GameGrid />
        </Box>
      </GridItem>
    </>
  );
};

export default GameListing;

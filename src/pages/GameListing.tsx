import { Show, GridItem, HStack, Box, Grid, Flex } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortingFilter from "../components/SortingFilter";

const GameListing = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`, //>1024px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside" paddingX={2}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingX={{ base: 3, md: 10 }}>
            <GameHeading />
            <Flex
              gap={5}
              flexDirection="row"
              flexDir={{ base: "column", md: "row" }}
            >
              <PlatformSelector />
              <SortingFilter />
            </Flex>

            <GameGrid />
          </Box>
        </GridItem>
        <Box>
          <GridItem area="nav"></GridItem>
        </Box>
      </Grid>
    </>
  );
};

export default GameListing;

import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortingFilter from "./components/SortingFilter";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //>1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
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
    </Grid>
  );
};

export default App;

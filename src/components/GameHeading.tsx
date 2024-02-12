import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  }`;
  return (
    <Heading fontSize="5xl" paddingBottom={5} as="h1">
      {heading + " Games"}
    </Heading>
  );
};

export default GameHeading;

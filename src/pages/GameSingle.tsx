import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ShowMore from "../components/ExpandableText";
import useGame from "../hooks/useGame";

const GameSingle = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);
  console.log(slug);
  console.log(game);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ShowMore limit={100}>{game.description_raw}</ShowMore>
    </>
  );
};

export default GameSingle;

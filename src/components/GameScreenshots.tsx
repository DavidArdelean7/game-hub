import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const images = data?.results;
  if (!images) return null;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} my={10}>
        {images.map((img, index) => (
          <Image key={index} src={img.image} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;

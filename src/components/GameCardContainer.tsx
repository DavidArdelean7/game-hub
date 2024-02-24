import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={20}
      overflow="hidden"
      _hover={{ transform: "scale(1.02)" }}
      transition="all .3s ease"
      cursor="pointer"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;

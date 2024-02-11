import { Box } from "@chakra-ui/react";
import { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box height="400px" borderRadius={30} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;

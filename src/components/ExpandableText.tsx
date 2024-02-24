import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  limit: number;
}
const ExpendableText = ({ children, limit }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = children.slice(0, limit);
  return (
    <>
      <Text>
        {!expanded ? summary + "..." : children}
        <Button
          onClick={() => setExpanded(!expanded)}
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          ml={3}
        >
          {expanded ? "Show less" : "Show More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpendableText;

import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const mobile = window.innerWidth < 768;
  return (
    <HStack paddingX={3}>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      {!mobile && <Text whiteSpace="nowrap">Dark Mode</Text>}
    </HStack>
  );
};

export default ColorModeSwitch;

import { HStack } from "@chakra-ui/react";
import { LightMode } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { DarkMode } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

function ToggleMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack style={{ marginRight: "-90%" }}>
      <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
        Hell / Dunkelmodus
      </Button>
    </HStack>
  );
}
export default ToggleMode;

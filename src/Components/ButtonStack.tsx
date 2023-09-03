import { Stack, HStack, VStack, Box, Button } from "@chakra-ui/react";

function ButtonStack() {
  return (
    <Stack
      direction={["column", "row"]}
      spacing="24px"
      style={{ marginBottom: "10%", marginLeft: "-19%" }}
    >
      <a href="https://www.xing.com/profile/Fynn_Willenborg/cv" target="_blank">
        <Button style={{ paddingTop: "15px" }} colorScheme="blue" w="100px">
          <Box w="100px" h="40px">
            Xing
          </Box>{" "}
        </Button>
      </a>
      <a href="https://github.com/SotuFynn" target="_blank">
        <Button style={{ paddingTop: "15px" }} colorScheme="blue" w="100px">
          <Box w="100px" h="40px">
            GitHub
          </Box>{" "}
        </Button>
      </a>
      <a
        href="https://www.linkedin.com/in/fynn-willenborg-b8b670182/"
        target="_blank"
      >
        <Button style={{ paddingTop: "15px" }} colorScheme="blue" w="100px">
          <Box w="100px" h="40px">
            LinkedIn
          </Box>
        </Button>
      </a>
    </Stack>
  );
}

export default ButtonStack;

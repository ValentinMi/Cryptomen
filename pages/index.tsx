import type { NextPage } from "next";
import { Center, Image, Flex, Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Center h={"100vh"}>
      <Flex direction={"column"}>
        <Text align={"center"}>Hello</Text>
        <Image
          borderRadius={"full"}
          boxSize="400px"
          src={"https://avatars.githubusercontent.com/u/33006260?v=4"}
        />
      </Flex>
    </Center>
  );
};

export default Home;

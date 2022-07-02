import type { NextPage } from "next";
import { Center, Flex, Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Center h={"100vh"}>
      <Flex direction={"column"}>
        <Text align={"center"}>Hello</Text>
      </Flex>
    </Center>
  );
};

export default Home;

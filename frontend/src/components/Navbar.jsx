import {
  Container,
  Flex,
  Text,
  HStack,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { MoonIcon, PlusSquareIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"container.xl"} px={4}>
      <Flex
        py={4}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Link to={"/"}>
          <Text
            bgGradient="linear(to-r, cyan.300, blue.700)"
            bgClip="text"
            fontSize={{
              base: "md",
              sm: "2xl",
            }}
            fontWeight="extrabold"
          >
            Product Store 🛒
          </Text>
        </Link>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode == "dark" ? (
              <SunIcon fontSize={20} />
            ) : (
              <MoonIcon fontSize={20} />
            )}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;

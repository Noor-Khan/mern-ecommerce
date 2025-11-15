import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";

function ProductForm() {
  const [newProduct, setProdcut] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleProduct = () => {
    console.log(newProduct, "new product");
  };

  return (
    <Box bg={useColorModeValue("white", "gray.800")} padding={10}>
      <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={"8"}>
        Create new product
      </Heading>
      <HStack flexDirection={"column"} spacing={8}>
        <Input
          borderColor={"gray.700"}
          placeholder="Product Name"
          name="name"
          onChange={(e) => setProdcut({ ...newProduct, name: e.target.value })}
        />
        <Input
          placeholder="price"
          name="price"
          onChange={(e) => setProdcut({ ...newProduct, price: e.target.value })}
        />
        <Input
          placeholder="Image URL"
          name="image"
          onChange={(e) => setProdcut({ ...newProduct, image: e.target.value })}
        />
        <Button width={"full"} onClick={handleProduct}>
          Create product
        </Button>
      </HStack>
    </Box>
  );
}

export default ProductForm;

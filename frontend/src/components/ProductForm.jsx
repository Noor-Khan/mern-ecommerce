import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useProductStore } from "../store/product";

function ProductForm() {
  const [newProduct, setProdcut] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();
  const toast = useToast();

  const handleProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
    setProdcut({
      name: "",
      price: "",
      image: "",
    });
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

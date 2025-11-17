import { Box, Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container maxW={"container.xl"} py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
          texalign={"center"}
        >
          Current Products 🚀
        </Text>

        <SimpleGrid columns={[2, null, 3]} spacing="40px">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
        {products.length === 0 && (
          <Text
            fontSize={"xl"}
            fontWeight={"bold"}
            color={"gray.500"}
            texalign={"center"}
          >
            No products found 😥{" "}
            <Link to="/create">
              <Text
                as={"span"}
                _hover={{
                  textDecoration: "underline",
                }}
                color={"blue.500"}
              >
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;

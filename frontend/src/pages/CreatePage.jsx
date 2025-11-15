import React from "react";
import ProductForm from "../components/ProductForm";
import { Box, Container } from "@chakra-ui/react";

const CreatePage = () => {
  return (
    <Container maxW={"3xl"} justifyContent={"center"}>
      <ProductForm />
    </Container>
  );
};

export default CreatePage;

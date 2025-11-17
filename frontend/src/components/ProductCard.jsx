import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useProductStore } from "../store/product";

function ProductCard({ product }) {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bgColor = useColorModeValue("white", "gray.800");
  const { deleteProduct, updateProduct, fetchProducts } = useProductStore();
  const toast = useToast();

  const [updateProd, setUpdateProduct] = useState(product);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleUpdateProduct = async () => {
    const { success, message } = await updateProduct(updateProd);
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
      onClose();
      fetchProducts();
    }
  };

  const handleDeleteProduct = async (id) => {
    const { success, message } = await deleteProduct(id);
    console.log(success, message);
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
  };
  return (
    <Box
      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all .3s ease-in-out"}
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bgColor}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w={"full"}
        objectFit={"cover"}
      ></Image>
      <Box p={4}>
        <Heading as={"h3"} size={"md"} mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight={"bold"} fontsize={"xl"} mb={4} color={textColor}>
          ${product.price}
        </Text>
        <HStack spacing={2}>
          <IconButton
            icon={<EditIcon />}
            colorScheme="blue"
            onClick={onOpen}
          ></IconButton>
          <IconButton
            icon={<DeleteIcon />}
            colorScheme="red"
            onClick={() => handleDeleteProduct(product._id)}
          ></IconButton>
        </HStack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack flexDirection={"column"} spacing={8}>
              <Input
                placeholder="Product Name"
                name="name"
                value={updateProd.name}
                onChange={(e) =>
                  setUpdateProduct({ ...updateProd, name: e.target.value })
                }
              />
              <Input
                placeholder="price"
                name="price"
                value={updateProd.price}
                onChange={(e) =>
                  setUpdateProduct({ ...updateProd, price: e.target.value })
                }
              />
              <Input
                placeholder="Image URL"
                name="image"
                value={updateProd.image}
                onChange={(e) =>
                  setUpdateProduct({ ...updateProd, image: e.target.value })
                }
              />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleUpdateProduct}>
              Update
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default ProductCard;

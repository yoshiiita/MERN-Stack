import { Container, useColorMode, useColorModeValue, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  return
  <Container maxW={"container.sm"}>
    <VStack spacing={8}>
      <Heading as={"h1"} size={"2x1"} textAlign={"center"} mb={8}>
        Create New Product
      </Heading>

      <Box
        w={"full"} bg={useColorModeValue("white", "gray.800")}
        p={6} rounded={"lg"} shadow={"md"}
      >
        <VStack spacing={4}>
          <Input
              placeholder='Product Name'
              name='name'
              value={newProduct.name}
              onChange={(e)=> setNewProduct({...newProduct,name:e.target.value})}
          />



        </VStack>

      </Box>

    </VStack>

  </Container>

}

export default CreatePage
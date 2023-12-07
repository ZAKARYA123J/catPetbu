import React from 'react';
import { Flex,ChakraProvider, Image, Text, Box,Button } from '@chakra-ui/react';
import img from './catl.jpeg';
import { Link } from 'react-router-dom';

function Middle() {
  return (
<>
<ChakraProvider>
      <Box
        bgImage={`url(${img})`}
        bgSize="cover"
        bgPosition="center"
        h="100vh"
        d="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div style={{ paddingTop: '30px', paddingLeft: '30px' }}>
          <Text mt={2} color="white" textShadow="2px 2px 4px rgba(0, 0, 0, 0.8)" fontWeight="bold" fontSize="lg">
            Petbu
          </Text>
          <Text maxW="300px" color="white" textShadow="2px 2px 4px rgba(0, 0, 0, 0.8)">
            Produces quality with the needs of cats in mind. Petbu posts and cat trees provide
            comfort and safety for your pet. We use a strong frame, thick winding ropes, durable
            material, first-class.
          </Text>
          <br/>
          <Button colorScheme="gray" size="xs">
        <Link to="/Products" style={{ color: 'inherit', textDecoration: 'none' }}>
          PRODUCTS >
        </Link>
      </Button>
        </div>
      </Box>
    </ChakraProvider>

   
      </>
  );
}

export default Middle;

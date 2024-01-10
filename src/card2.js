import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Checkbox, Button } from '@chakra-ui/react';

import { CiShoppingCart } from "react-icons/ci";
function Card2(props) {
  const data = props.data;
  const [data1, setdata1] = useState(data.id);

  return (
<Box
  width="300px"
  border="1px black solid"
  borderRadius="10px" // Corrected from "borederRadius" to "borderRadius"
  height="300px"
  bg="white"
  shadow="md"
  rounded="md"
  m="2"
>
      <Box
        height="200px"
        width="full"
        bgImage={`url('${data.image}')`}
        bgSize="contain"
        bgPosition="center"
        bgRepeat="no-repeat"
        p="3"
        display="flex"
        flexDir="column"
        justifyContent="space-between"
      >
        <Box display="flex" justifyContent="space-between">
          <Checkbox />
          <Button color="white" _hover={{ color: 'blue.500' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </Button>
        </Box>
        <Box>
          <span className="uppercase text-xs bg-green-50 p-1 border-green-500 border rounded text-green-700 font-medium select-none">
            available
          </span>
        </Box>
      </Box>
      <Box p="3" display="flex" flexDir="column" alignItems="center" height="60%">
        <h2 className="text-center text-gray-800 mt-1" style={{ fontWeight: 'bold' }}>
          {data.id}
        </h2>
        <p className="text-center text-gray-800 mt-1">{data.price} DH</p>
        <p className="hidden text-center text-gray-800 mt-1">{data.sisal}{data.description} DH</p>
        <Link
  style={{
    // Adjust the border weight as needed
    fontWeight: "bold", // Font weight for text
    maxWidth: "50%", // Adjust the maximum width as needed
  }}
  
  to={`/Productinfo/${data1}`}
  as={Button}
  colorScheme='gray'
  rounded="md"
  _hover={{ bg: 'black' }}
  _active={{ bg: 'blue.700' }}
  isFullWidth
  mt="4"
  alignItems="center"
  justifyContent="center"
>
      <CiShoppingCart fontSize="30px"  />                
</Link>

      </Box>
    </Box>
  );
}

export default Card2;

// ReservationSuccess.js
import React from 'react';
import { Box, Center, Heading, Text, Button } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const ReservationSuccess = () => {
  return (
    <Box textAlign="center" mt="10">
      <Heading mb="4"> Reservation Successful! </Heading>
      <Center>
        <Text fontSize="xl" display="inline-block" mr="2">
          Thank you for choosing our service. Your reservation has been confirmed.
        </Text>
        <FaCheckCircle size={20} color="green" display="inline-block" />
      </Center>
      <Button colorScheme="teal" size="lg" onClick={() => window.location.replace('/')}>
        Back to Home
      </Button>
    </Box>
  );
};

export default ReservationSuccess;

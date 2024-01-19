import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  Stack,
  ChakraProvider,
  extendTheme,
  CSSReset,
  Center,
  Heading,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


const ReservationForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { data1 } = useParams();
  const [number, setNumber] = useState('');
  const [reference, setReference] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://data1-sp44.onrender.com/Reservation', {
        name,
        email,
        reference,
        number,
        message,
        data1
      });

      setName('');
      setEmail('');
      setNumber('');
      setReference('');
      setMessage('');

      navigate('/succs');
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred while booking');
    }
  };

  return (
      <Center>
        <Box width="50%">
          <form onSubmit={handleSubmit}>
         {/* Use Stack component for vertical spacing */}
         
  <FormControl>
    <FormLabel>Email</FormLabel>
    <Input
      variant='flushed'
      borderBottom={'1px solid black'}
      onChange={(e) => setEmail(e.target.value)}
      type="email"
      required
    />
  </FormControl>

  {/* Add more FormControl components as needed */}

            <FormControl>
              <FormLabel>Full name</FormLabel>
              <Input
              variant='flushed'
            borderBottom={'1px solid black'}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel>Phone number</FormLabel>
              <Input
                 variant='flushed'
                 borderBottom={'1px solid black'}
                onChange={(e) => setNumber(e.target.value)}
                type="tel"
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel>Reference Number</FormLabel>
              <Input
                 variant='flushed'
                 value={data1}
                 borderBottom={'1px solid black'}
                onChange={(e) => setReference(e.target.value)}
                type="text"
      
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel>Your Message</FormLabel>
              <Textarea
                 variant='flushed'
                 borderBottom={'1px solid black'}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
              />
            </FormControl>

            <Center>
              <Button type="submit">Reserve Now</Button>
            </Center>
          </form>
        </Box>
      </Center>
  );
};

export default ReservationForm;

import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  ChakraProvider,
  extendTheme,
  CSSReset,
  Center,
  Heading,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const theme = extendTheme({
  components: {
    Box: {
      baseStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: '2rem',
        maxWidth: '400px',
        margin: 'auto',
        backgroundColor: 'gray.100',
        borderRadius: '8px',
        boxShadow: 'md',
      },
    },
    Heading: {
      baseStyle: {
        marginBottom: '1rem',
        color: 'teal.400',
      },
    },
    FormControl: {
      baseStyle: {
        marginBottom: '1rem',
      },
    },
    Input: {
      baseStyle: {
        borderColor: 'gray.300',
        borderRadius: '8px',
      },
      defaultProps: {
        focusBorderColor: 'teal.400',
      },
    },
    Textarea: {
      baseStyle: {
        borderColor: 'gray.300',
        borderRadius: '8px',
      },
      defaultProps: {
        focusBorderColor: 'teal.400',
      },
    },
    Button: {
      baseStyle: {
        color: 'white',
        backgroundColor: 'teal.400',
        _hover: {
          backgroundColor: 'teal.500',
        },
      },
    },
  },
});

const ReservationForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [reference, setReference] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://zakarya.onrender.com/Reservation', {
        name,
        email,
        reference,
        number,
        message,
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
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel>Full name</FormLabel>
              <Input
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel>Phone number</FormLabel>
              <Input
                onChange={(e) => setNumber(e.target.value)}
                type="tel"
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel>Reference Number</FormLabel>
              <Input
                onChange={(e) => setReference(e.target.value)}
                type="number"
      
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel>Your Message</FormLabel>
              <Textarea
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

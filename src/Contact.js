import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {
  Box,
  Input,
  Button,
  InputGroup,
  InputLeftAddon,
  FormControl,
  FormLabel,
  Textarea,
  ChakraProvider,
  extendTheme,
  CSSReset,
  Center,
  Heading,
} from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Box: {
      baseStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // 100% of the viewport height
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
      },
    },
    InputGroup: {
      baseStyle: {
        marginBottom: '1rem', // Add space between input groups
        width: '100%', // Set width to 100%
      },
    },
    InputLeftAddon: {
      baseStyle: {
        backgroundColor: 'gray.50',
        borderRadius: '8px 0 0 8px',
      },
    },
    Input: {
      baseStyle: {
        borderColor: 'gray.300',
        borderRadius: '0 8px 8px 0',
        width: '100%', // Set width to 100%
      },
      defaultProps: {
        focusBorderColor: 'teal.400',
      },
    },
    Textarea: {
      baseStyle: {
        borderColor: 'gray.300',
        width: '100%', // Set width to 100%
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://zakarya.onrender.com/Reservation', {
        name: name,
        email: email,
        reference: reference,
        number: number,
        message: message,
      });

      setName('');
      setEmail('');
      setNumber('');
      setReference('');
      setMessage('');
      
      alert('Book successfully');
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred while booking');
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Box>
          <Center>
            <Heading as="h1" size="lg" mb={4}>
              Reservation Form
            </Heading>
          </Center>
          <form onSubmit={handleSubmit} style={{ border: '1px solid black', padding: '4px', borderRadius: '4px' }}>
            <InputGroup>
              <InputLeftAddon children='email' />
              <Input onChange={(e) => setEmail(e.target.value)} color='teal' type='text' placeholder='add email' />
            </InputGroup>
            <br />
            <InputGroup>
              <InputLeftAddon children='Full name' />
              <Input onChange={(e) => setName(e.target.value)} color='teal' type='text' placeholder='add your name' />
            </InputGroup>
            <br />
            <InputGroup>
              <InputLeftAddon children='+212' />
              <Input onChange={(e) => setNumber(e.target.value)} color='teal' type='tel' placeholder='phone number' />
            </InputGroup>
            <br />
            <InputGroup>
              <InputLeftAddon children='Reference' />
              <Input color='teal' onChange={(e) => setReference(e.target.value)} type="text" placeholder="Reference Number" required />
            </InputGroup>
            <br />
            <InputGroup>
              <InputLeftAddon children='Message' />
              <Textarea onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" rows={4} />
            </InputGroup>
            <br />
            <Center>
              <Button type="submit">Reserve Now</Button>
            </Center>
          </form>
        </Box>
      </ChakraProvider>
    </div>
  );
};

export default ReservationForm;

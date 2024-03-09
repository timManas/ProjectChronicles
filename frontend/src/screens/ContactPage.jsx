import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  AspectRatio,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'

import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'

const ContactPage = () => {
  return (
    <>
      <Flex justify='center' align='center'>
        <Box color='white' borderRadius='lg' p={{ sm: 5, md: 5, lg: 10 }}>
          <Box>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Advertise With Us</Heading>

                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems='center'>
                      <Text color='gray.500'>
                        <p>Looking to Collab ? Send us a message ! </p>
                        <p> We are always looking to work with the </p>
                        <p>best and upcoming people in the industry </p>
                      </Text>
                      <Button
                        size='md'
                        height='48px'
                        width='200px'
                        variant='ghost'
                        color='#DCE2FF'
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color='#1970F1' size='20px' />}
                      >
                        +91-988888888
                      </Button>
                      <Button
                        size='md'
                        height='48px'
                        width='200px'
                        variant='ghost'
                        color='#DCE2FF'
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color='#1970F1' size='20px' />}
                      >
                        timRom@protonmail.com
                      </Button>
                      <Button
                        size='md'
                        height='48px'
                        width='200px'
                        variant='ghost'
                        color='#DCE2FF'
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color='#1970F1' size='20px' />}
                      >
                        Toronto, Canada
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg='white' borderRadius='lg'>
                  <Box m={8} color='#0B0E3F'>
                    <VStack spacing={5}>
                      <FormControl id='name'>
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor='#E0E1E7'>
                          <InputLeftElement pointerEvents='none'>
                            <BsPerson color='gray.800' />
                          </InputLeftElement>
                          <Input type='text' size='md' />
                        </InputGroup>
                      </FormControl>
                      <FormControl id='name'>
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor='#E0E1E7'>
                          <InputLeftElement pointerEvents='none'>
                            <MdOutlineEmail color='gray.800' />
                          </InputLeftElement>
                          <Input type='text' size='md' />
                        </InputGroup>
                      </FormControl>
                      <FormControl id='name'>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor='gray.300'
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder='message'
                        />
                      </FormControl>
                      <FormControl id='name' float='right'>
                        <Button
                          variant='solid'
                          bg='#0D74FF'
                          color='white'
                          _hover={{}}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>

      <AspectRatio ratio={3 / 1}>
        <iframe src='https://maps.google.com/maps?width=25%25&amp;height=400&amp;hl=en&amp;q=Toronto,%20Ontario,%20Canada+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed' />
      </AspectRatio>
    </>
  )
}

export default ContactPage

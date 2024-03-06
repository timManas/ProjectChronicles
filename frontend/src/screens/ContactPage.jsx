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
} from '@chakra-ui/react'

import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'

const ContactPage = () => {
  return (
    <Container maxW='full' mt={0} centerContent overflow='hidden'>
      <Flex>
        <Box
          bg='#02054B'
          color='white'
          borderRadius='lg'
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color='gray.500'>
                    Get in Touch !
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems='flex-start'>
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
                        hello@abc.com
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
                        <FormLabel>Name</FormLabel>
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
    </Container>
  )
}

export default ContactPage

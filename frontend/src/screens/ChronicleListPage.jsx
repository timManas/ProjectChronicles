import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  Wrap,
  WrapItem,
  Container,
  Stack,
  SimpleGrid,
} from '@chakra-ui/react'
import EditorsStory from '../components/ListPage/EditorsPick'
import BlogTags from '../components/ListPage/BlogTags'
import BlogAuthor from '../components/ListPage/BlogAuthor'

const ChronicleListPage = () => {
  const [products, setProduct] = useState([])

  useEffect(
    () => async () => {
      await axios
        .get('http://localhost:5000/products')
        .then((result) => {
          setProduct(result.data)
        })
        .catch((error) => {
          console.log(`error: ${error}`)
        })
    },
    []
  )

  return (
    <Container maxW={'7xl'} p='12'>
      <Heading as='h1'>Editors Pick</Heading>
      <EditorsStory />
      <Divider marginTop='50' />

      <Heading as='h2' marginTop='5'>
        Latest articles
      </Heading>

      <SimpleGrid columns={[2, null, 3]} spacing='40px'>
        <Wrap marginTop='5'>
          <WrapItem width={{ base: '100%' }}>
            <Box w='100%'>
              <Box borderRadius='lg' overflow='hidden'>
                <Box textDecoration='none' _hover={{ textDecoration: 'none' }}>
                  <Image
                    transform='scale(1.0)'
                    src={
                      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                    }
                    alt='some text'
                    objectFit='contain'
                    width='100%'
                    transition='0.3s ease-in-out'
                    _hover={{
                      transform: 'scale(1.05)',
                    }}
                  />
                </Box>
              </Box>
              <BlogTags tags={['Engineering', 'Product']} marginTop={3} />
              <Heading fontSize='xl' marginTop='2'>
                <Text textDecoration='none' _hover={{ textDecoration: 'none' }}>
                  Some blog title
                </Text>
              </Heading>
              <Text as='p' fontSize='md' marginTop='2'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </Text>
              <BlogAuthor
                name='John Doe'
                date={new Date('2021-04-06T19:01:27Z')}
              />
            </Box>
          </WrapItem>
        </Wrap>

        <Wrap marginTop='5'>
          <WrapItem width={{ base: '100%' }}>
            <Box w='100%'>
              <Box borderRadius='lg' overflow='hidden'>
                <Box textDecoration='none' _hover={{ textDecoration: 'none' }}>
                  <Image
                    transform='scale(1.0)'
                    src={
                      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                    }
                    alt='some text'
                    objectFit='contain'
                    width='100%'
                    transition='0.3s ease-in-out'
                    _hover={{
                      transform: 'scale(1.05)',
                    }}
                  />
                </Box>
              </Box>
              <BlogTags tags={['Engineering', 'Product']} marginTop={3} />
              <Heading fontSize='xl' marginTop='2'>
                <Text textDecoration='none' _hover={{ textDecoration: 'none' }}>
                  Some blog title
                </Text>
              </Heading>
              <Text as='p' fontSize='md' marginTop='2'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </Text>
              <BlogAuthor
                name='John Doe'
                date={new Date('2021-04-06T19:01:27Z')}
              />
            </Box>
          </WrapItem>
        </Wrap>
        <Wrap marginTop='5'>
          <WrapItem width={{ base: '100%' }}>
            <Box w='100%'>
              <Box borderRadius='lg' overflow='hidden'>
                <Box textDecoration='none' _hover={{ textDecoration: 'none' }}>
                  <Image
                    transform='scale(1.0)'
                    src={
                      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                    }
                    alt='some text'
                    objectFit='contain'
                    width='100%'
                    transition='0.3s ease-in-out'
                    _hover={{
                      transform: 'scale(1.05)',
                    }}
                  />
                </Box>
              </Box>
              <BlogTags tags={['Engineering', 'Product']} marginTop={3} />
              <Heading fontSize='xl' marginTop='2'>
                <Text textDecoration='none' _hover={{ textDecoration: 'none' }}>
                  Some blog title
                </Text>
              </Heading>
              <Text as='p' fontSize='md' marginTop='2'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </Text>
              <BlogAuthor
                name='John Doe'
                date={new Date('2021-04-06T19:01:27Z')}
              />
            </Box>
          </WrapItem>
        </Wrap>
      </SimpleGrid>

      <Divider marginTop='50' />

      <Heading as='h2' marginTop='5'>
        Gear
      </Heading>

      <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
        <Wrap marginTop='5'>
          <WrapItem width={{ base: '100%' }}>
            <Box w='100%'>
              <Box borderRadius='lg' overflow='hidden'>
                <Box textDecoration='none' _hover={{ textDecoration: 'none' }}>
                  <Image
                    transform='scale(1.0)'
                    src={
                      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                    }
                    alt='some text'
                    objectFit='contain'
                    width='100%'
                    transition='0.3s ease-in-out'
                    _hover={{
                      transform: 'scale(1.05)',
                    }}
                  />
                </Box>
              </Box>
              <BlogTags tags={['Engineering', 'Product']} marginTop={3} />
              <Heading fontSize='xl' marginTop='2'>
                <Text textDecoration='none' _hover={{ textDecoration: 'none' }}>
                  Some blog title
                </Text>
              </Heading>
              <Text as='p' fontSize='md' marginTop='2'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </Text>
              <BlogAuthor
                name='John Doe'
                date={new Date('2021-04-06T19:01:27Z')}
              />
            </Box>
          </WrapItem>
        </Wrap>

        <Wrap marginTop='5'>
          <WrapItem width={{ base: '100%' }}>
            <Box w='100%'>
              <Box borderRadius='lg' overflow='hidden'>
                <Box textDecoration='none' _hover={{ textDecoration: 'none' }}>
                  <Image
                    transform='scale(1.0)'
                    src={
                      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                    }
                    alt='some text'
                    objectFit='contain'
                    width='100%'
                    transition='0.3s ease-in-out'
                    _hover={{
                      transform: 'scale(1.05)',
                    }}
                  />
                </Box>
              </Box>
              <BlogTags tags={['Engineering', 'Product']} marginTop={3} />
              <Heading fontSize='xl' marginTop='2'>
                <Text textDecoration='none' _hover={{ textDecoration: 'none' }}>
                  Some blog title
                </Text>
              </Heading>
              <Text as='p' fontSize='md' marginTop='2'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </Text>
              <BlogAuthor
                name='John Doe'
                date={new Date('2021-04-06T19:01:27Z')}
              />
            </Box>
          </WrapItem>
        </Wrap>
      </Stack>
    </Container>
  )
}

export default ChronicleListPage

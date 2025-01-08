import axios from 'axios'
import DOMPurify from 'dompurify'
import parse from 'html-react-parser'
import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  Image,
  VStack,
  Heading,
  SimpleGrid,
  useColorModeValue,
  List,
  ListItem,
  Spinner,
  Avatar,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ChroniclePage = () => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [article, setArticle] = useState({})
  console.log('props' + JSON.stringify(id))

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`/api/articles/${id}`)
        console.log('result data: ' + JSON.stringify(result.data))
        setIsLoading(false)
        setArticle(result.data)
      } catch (err) {
        console.log(`error: ${err}`)
      }
    }

    fetchData()
  }, [id])

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && (
        <Container maxW={'7xl'}>
          <SimpleGrid
            columns={{ base: 1, lg: 1 }}
            spacing={{ base: 1, md: 1 }}
            py={{ base: 4, md: 6 }}
          >
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={'header'}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                >
                  {DOMPurify.sanitize(article.title)}
                </Heading>

                <Text
                  color={useColorModeValue('gray.900', 'gray.400')}
                  fontWeight={300}
                  fontSize={'2xl'}
                >
                  {DOMPurify.sanitize(article.articlePage.price)}
                </Text>

                <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                  <Avatar
                    src={
                      'https://avatars.githubusercontent.com/u/6054824?s=96&v=4'
                    }
                  />
                  <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                    <Text fontWeight={600}>
                      {DOMPurify.sanitize(article.articlePage.author)}
                    </Text>
                    <Text color={'gray.500'}>
                      {DOMPurify.sanitize(article.articlePage.date)}
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Stack>

            <Stack spacing={{ base: 6, md: 10 }}>
              <Stack spacing={{ base: 4, sm: 6 }} direction={'column'}>
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text
                    color={useColorModeValue('gray.500', 'gray.400')}
                    fontSize={'2xl'}
                    fontWeight={'300'}
                  >
                    {DOMPurify.sanitize(article.articlePage.intro)}
                  </Text>

                  <Image
                    rounded={'md'}
                    alt={'product image'}
                    src={article.image}
                    fit={'cover'}
                    align={'center'}
                    w={'100%'}
                    h={{ base: '100%', sm: '200px', lg: '400px' }}
                    mt={4}
                  />
                  <Text>Credit: {article.imageCred}</Text>
                </VStack>

                <Box>
                  <List spacing={2}>
                    <ListItem>
                      <Box>
                        {parse(
                          DOMPurify.sanitize(article.articlePage.paragraph1)
                        )}

                        <>
                          {article.articlePage.image1 && (
                            <Flex
                              justifyContent='center'
                              alignItems='center'
                              direction='column'
                            >
                              <Box
                                display='flex'
                                justifyContent='center'
                                alignItems='center'
                                flexDirection='column'
                              >
                                <Image
                                  rounded={'md'}
                                  alt={'product image'}
                                  src={article.articlePage.image1}
                                  fit={'cover'}
                                  align={'center'}
                                  w={'70%'}
                                  h={{ base: '100%', sm: '200px', lg: '400px' }}
                                  mt={4}
                                  mb={4}
                                />
                                <Text>
                                  Credit: {article.articlePage.image1Credit}
                                </Text>
                              </Box>
                            </Flex>
                          )}
                        </>
                      </Box>
                    </ListItem>
                    <ListItem>
                      <Box>
                        {parse(
                          DOMPurify.sanitize(article.articlePage.paragraph2)
                        )}
                      </Box>
                    </ListItem>
                    <ListItem>
                      <Box>
                        {parse(
                          DOMPurify.sanitize(article.articlePage.paragraph3)
                        )}

                        <>
                          {article.articlePage.image2 && (
                            <Flex
                              justifyContent='center'
                              alignItems='center'
                              direction='column'
                            >
                              <Box
                                display='flex'
                                justifyContent='center'
                                alignItems='center'
                                flexDirection='column'
                              >
                                <Image
                                  rounded={'md'}
                                  alt={'product image'}
                                  src={article.articlePage.image2}
                                  fit={'cover'}
                                  align={'center'}
                                  w={'70%'}
                                  h={{ base: '100%', sm: '200px', lg: '400px' }}
                                  mt={4}
                                  mb={4}
                                />
                                <Text>
                                  Credit: {article.articlePage.image2Credit}
                                </Text>
                              </Box>
                            </Flex>
                          )}
                        </>
                      </Box>
                    </ListItem>

                    <ListItem>
                      <Box>
                        {parse(DOMPurify.sanitize(article.articlePage.outro))}
                      </Box>
                    </ListItem>
                  </List>
                </Box>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      )}
    </>
  )
}

export default ChroniclePage

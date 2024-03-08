import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Heading,
  Divider,
  Wrap,
  WrapItem,
  Container,
  Stack,
  SimpleGrid,
} from '@chakra-ui/react'
import EditorsStory from '../components/ListPage/EditorsPick.jsx'

import ArticleCard from '../components/ListPage/ArticleCard.jsx'

const ChronicleListPage = () => {
  const [articles, setArticles] = useState([])

  useEffect(
    () => async () => {
      try {
        const result = await axios.get('http://localhost:5000/api/articles')
        console.log(result.data)
        setArticles(result.data)
      } catch (err) {
        console.log(`error: ${err}`)
      }
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
            <ArticleCard />
          </WrapItem>
        </Wrap>

        <Wrap marginTop='5'>
          <WrapItem width={{ base: '100%' }}>
            <ArticleCard />
          </WrapItem>
        </Wrap>

        <Wrap marginTop='5'>
          <WrapItem width={{ base: '100%' }}>
            <ArticleCard />
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
            <ArticleCard />
          </WrapItem>
        </Wrap>

        <Wrap marginTop='5'>
          <WrapItem width={{ base: '100%' }}>
            <ArticleCard />
          </WrapItem>
        </Wrap>

        <Wrap marginTop='5'>
          <WrapItem width={{ base: '100%' }}>
            <ArticleCard />
          </WrapItem>
        </Wrap>
      </Stack>
    </Container>
  )
}

export default ChronicleListPage

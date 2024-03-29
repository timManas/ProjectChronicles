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
  const [editorsPick, setEditorsPick] = useState([])
  const [gearReview, setGearsReviews] = useState([])
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetchEditorsArticles('1')
  }, [setEditorsPick])

  const fetchEditorsArticles = async (qty) => {
    try {
      console.log('Editors Pick Start')
      const result = await axios.get(`/api/articles/EditorsPick/${qty}`)
      setEditorsPick(result.data['0'])
      console.log(editorsPick)
    } catch (err) {
      console.log(`error: ${err}`)
    }
  }

  useEffect(() => {
    fetchGearArticles('3')
  }, [setGearsReviews])

  const fetchGearArticles = async (qty) => {
    try {
      console.log('Gear Start')
      const result = await axios.get(`/api/articles/Gear/${qty}`)
      setGearsReviews(result.data)
      console.log(gearReview)
    } catch (err) {
      console.log(`error: ${err}`)
    }
  }

  useEffect(() => {
    fetchReviewArticles('8')
  }, [setReviews])

  const fetchReviewArticles = async (qty) => {
    try {
      console.log('Review Start')
      const result = await axios.get(`/api/articles/Review/${qty}`)
      setReviews(result.data)
      console.log(reviews)
    } catch (err) {
      console.log(`error: ${err}`)
    }
  }

  return (
    <Container maxW={'7xl'} p='12'>
      <Heading as='h1'>Editors Pick</Heading>
      <EditorsStory {...editorsPick} />

      <Divider marginTop='50' />

      <Heading as='h2' marginTop='5'>
        Gear
      </Heading>

      <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
        {gearReview.map((gear) => (
          <Wrap marginTop='5' key={gear._id}>
            <WrapItem width={{ base: '100%' }}>
              <ArticleCard {...gear} />
            </WrapItem>
          </Wrap>
        ))}
      </Stack>

      <Divider marginTop='50' />

      <Heading as='h2' marginTop='5'>
        Reviews
      </Heading>

      <SimpleGrid columns={[2, null, 4]} spacing='20px'>
        {reviews.map((review) => (
          <Wrap marginTop='5' key={review._id}>
            <WrapItem width={{ base: '100%' }}>
              <ArticleCard {...review} />
            </WrapItem>
          </Wrap>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default ChronicleListPage

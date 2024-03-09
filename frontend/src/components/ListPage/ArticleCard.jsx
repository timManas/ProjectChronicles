import { Box, Image, Text, Heading } from '@chakra-ui/react'
import BlogTags from './BlogTags.jsx'
import BlogAuthor from './BlogAuthor.jsx'
import { Link } from 'react-router-dom'

const ArticleCard = ({
  _id,
  title,
  image,
  description,
  brand,
  category,
  createdAt,
}) => {
  return (
    <Link to={`/chronicles/${_id}`}>
      <Box w='100%'>
        <Box borderRadius='lg' overflow='hidden'>
          <Box textDecoration='none' _hover={{ textDecoration: 'none' }}>
            <Image
              transform='scale(1.0)'
              src={image}
              alt='some text'
              objectFit='cover'
              boxSize='350px'
              width='100%'
              transition='0.3s ease-in-out'
              _hover={{
                transform: 'scale(1.05)',
              }}
            />
          </Box>
        </Box>
        <BlogTags tags={[category]} marginTop={3} />
        <Heading fontSize='xl' marginTop='2'>
          <Text textDecoration='none' _hover={{ textDecoration: 'none' }}>
            {title}
          </Text>
        </Heading>
        <Text as='p' fontSize='md' marginTop='2'>
          {description}
        </Text>
        <BlogAuthor name='John Doe' date={new Date(createdAt)} />
      </Box>
    </Link>
  )
}

export default ArticleCard

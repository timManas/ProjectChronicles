import { HStack, Tag } from '@chakra-ui/react'

const BlogTags = (props) => {
  const { marginTop, tags } = props

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={'md'} variant='solid' colorScheme='orange' key={tag}>
            {tag}
          </Tag>
        )
      })}
    </HStack>
  )
}

export default BlogTags

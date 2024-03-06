import { VStack, Heading, Text } from '@chakra-ui/react'

const AdvertisePage = () => {
  return (
    <>
      <VStack paddingTop='40px' spacing='2' alignItems='flex-start'>
        <Heading as='h2'>Advertise With Us</Heading>
        <Text as='p' fontSize='lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
          pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien. Suspendisse placerat vulputate posuere. Curabitur neque
          tortor, mattis nec lacus non, placerat congue elit.
        </Text>
      </VStack>
    </>
  )
}

export default AdvertisePage

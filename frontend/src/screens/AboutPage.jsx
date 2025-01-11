import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
  chakra,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

function StatsCard(props) {
  const { title, stat } = props
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
    >
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  )
}

const AboutPage = () => {
  return (
    <>
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}
            >
              Our Story
            </Text>
            <Heading>A Constant Pursuit of Perfection</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              Triathlon Hero is the product of long days and nights of triathlon
              preparation. From the start of training day till the finish line
              and beyond. We are here help guide you on this amazing journey
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }
            >
              <Feature
                icon={
                  <Icon
                    as={IoAnalyticsSharp}
                    color={'yellow.500'}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Race Planning'}
              />
              <Feature
                icon={
                  <Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Gear Preparation & Review'}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Race Analysis'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>

        <Text as='p' p={20} fontSize='lg'>
          As a passionate triathlete myself, I’ve spent years immersed in the
          sport, combining personal experience with professional training to
          help athletes achieve their goals. Whether you’re a beginner looking
          to complete your first race or a seasoned competitor aiming for a new
          personal best, I bring a personalized, evidence-based approach to
          every athlete’s journey. My philosophy centers on balancing smart
          training, injury prevention, and mental resilience to ensure
          sustainable progress and success. Triathlon isn’t just a sport—it’s a
          lifestyle, and I’m here to guide you every step of the way as you
          chase your dreams and unlock your full potential.
        </Text>
      </Container>{' '}
    </>
  )
}

export default AboutPage

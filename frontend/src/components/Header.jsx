import {
  Box,
  Flex,
  Text,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Link to='/'>
                <Text>Home</Text>
              </Link>
              <Link to='/chronicles'>
                <Box>Chronicles</Box>
              </Link>
              <Link to='/about'>
                <Box>About</Box>
              </Link>
              <Link to='/contact'>
                <Box>Contact</Box>
              </Link>
              <Link to='/advertise'>
                <Box>Advertise</Box>
              </Link>
            </Stack>
          </Flex>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Header

import { Container, Nav, Navbar } from 'react-bootstrap'

const Footer = () => {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link href='#home'>Contact Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Footer

// import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './screens/HomePage.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  )
}

export default App

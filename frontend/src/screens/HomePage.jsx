import CardItem from '../components/Card.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios'

const HomePage = () => {
  const [products, setProduct] = useState([])

  useEffect(
    () => async () => {
      await axios
        .get('http://localhost:5000/products')
        .then((result) => {
          setProduct(result.data)
        })
        .catch((error) => {
          console.log(`error: ${error}`)
        })
    },
    []
  )

  return (
    <>
      {products.map((item) => (
        <CardItem key={item.name} {...item} />
      ))}
    </>
  )
}

export default HomePage

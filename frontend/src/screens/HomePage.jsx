import CardItem from '../components/Card.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import products from '../data/productData.jsx'

const HomePage = () => {
  const [products, setProduct] = useState([])

  useEffect(
    () => async () => {
      await axios
        .get('http://localhost:5000/products')
        // .get('/products')
        .then((result) => {
          console.log('result: ' + JSON.stringify(result))
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

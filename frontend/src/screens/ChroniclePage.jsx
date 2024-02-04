import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ChroniclePage = () => {
  const { id } = useParams()
  const [name, setName] = useState()
  const [description, setDescription] = useState()

  useEffect(
    () => async () => {
      const productDetails = await axios.get(
        `http://localhost:5000/products/${id}`
      )
      setName(productDetails.data.name)
      setDescription(productDetails.data.description)
    },
    []
  )

  return (
    <>
      <h1>{name}</h1>
      <p />
      <h2>{description}</h2>
    </>
  )
}

export default ChroniclePage

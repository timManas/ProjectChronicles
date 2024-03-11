import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import HomePage from './screens/HomePage.jsx'
import AboutPage from './screens/AboutPage.jsx'
import ChroniclePage from './screens/ChroniclePage.jsx'
import ChronicleListPage from './screens/ChronicleListPage.jsx'
import ContactPage from './screens/ContactPage.jsx'
import AdvertisePage from './screens/AdvertisePage.jsx'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />}>
      <Route index={true} path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/advertise' element={<AdvertisePage />} />

      <Route path='/chronicles' element={<ChronicleListPage />} />
      <Route path='/chronicles/:id' element={<ChroniclePage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ChakraProvider>
)

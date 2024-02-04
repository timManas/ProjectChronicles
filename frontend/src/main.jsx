import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import HomePage from './screens/HomePage.jsx'
import AboutPage from './screens/AboutPage.jsx'
import ChroniclePage from './screens/ChroniclePage.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<HomePage />} />
      <Route path='about' element={<AboutPage />} />
      <Route path='product/:id' element={<ChroniclePage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
)

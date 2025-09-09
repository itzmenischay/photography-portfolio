import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'


// Component imports
import App from './App.jsx'
import AboutUs from './components/AboutUs.jsx'
import WhyUs from './components/WhyUs.jsx'
import Portfolio from './components/Portfolio.jsx'
import Services from './components/Services.jsx'
import Estimate from './components/Estimate.jsx'
import NotFound from './components/NotFound.jsx'

// Styles import
import './index.css'
import ScrollToTop from './components/ScrollToTop.jsx'
import About from './components/AboutUs.jsx'
import Navbar from './components/Navbar.jsx'

function RootLayout(){
  return (
    <>
      <ScrollToTop/>
      <Navbar/>
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <AboutUs/>
      },
      {
        path: "/whyus",
        element: <WhyUs/>
      },
      {
        path: "/portfolio",
        element: <Portfolio/>
      },
      {
        path: "/services",
        element: <Services/>
      },
      {
        path: "/estimate",
        element: <Estimate/>
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={router} />
  // </StrictMode>,
)

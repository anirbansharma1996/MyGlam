import React from 'react'
import Navbar from './Components/Navbar'
import AllRoutes from './Routes/AllRoutes'
import './App.css'
 import "slick-carousel/slick/slick.css"; 
 import "slick-carousel/slick/slick-theme.css";
const App = () => {
  return (
    <div>
      <Navbar/>
    <AllRoutes/>
    </div>
  )
}

export default App

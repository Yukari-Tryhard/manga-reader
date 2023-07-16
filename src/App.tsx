import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/home/HomePage'
import { Outlet, useNavigate } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  const navigate = useNavigate();

  useEffect(()=>{
    navigate("/home")
  }, [])

  return (
    <div className='bg-primary h-[100vh] w-[100vw] overflow-hidden'>
      {/* <HomePage/> */}
      <Outlet></Outlet>
    </div>
      )
}

export default App

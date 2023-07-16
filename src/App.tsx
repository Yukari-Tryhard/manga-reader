import { useEffect } from 'react'
import './App.css'
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

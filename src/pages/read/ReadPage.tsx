import NavHeader from './components/NavHeader'
import Content from './components/Content'
import {IoArrowBack} from "react-icons/io5"
import {useNavigate } from 'react-router-dom'
const ReadPage = () => {

  const navigate = useNavigate();
  return (
    <div className='w-full justify-center flex flex-col items-center'>
            <IoArrowBack className="absolute top-6 left-4 text-white text-2xl" onClick={() => navigate(-1)}></IoArrowBack>
        <NavHeader></NavHeader>
        <Content></Content>
    </div>
  )
}

export default ReadPage
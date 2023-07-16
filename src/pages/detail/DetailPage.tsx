import { AspectRatio } from '@/src/components/ui/aspect-ratio';
import React from 'react'

import {IoArrowBack} from "react-icons/io5"
import {RxShare1} from "react-icons/rx"
import SliderPages from './components/SliderPages';
import Description from './components/Description';
import { useNavigate } from 'react-router-dom';


const DetailPage = () => {
    const navigate = useNavigate();

    
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row text-white items-center justify-between px-8 mt-4'>
                <IoArrowBack onClick={() => navigate(-1)}/>
                <p>Chi tiết truyện</p>
                <RxShare1/>
            </div>
            <SliderPages></SliderPages>
            <Description></Description>
        </div>
    )
}

export default DetailPage
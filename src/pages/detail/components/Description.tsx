import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { BsChatHeart } from "react-icons/bs"
import InfoCard from './InfoCard'
import CardFooter from './CardFooter'
import ChapterList from './ChapterList'
import { useNavigate } from 'react-router-dom'

const Description = () => {
    const activeRef = useRef<HTMLButtonElement>(null);


    useLayoutEffect(() => {
        if (activeRef && activeRef.current){
            activeRef.current.focus();
        }
    }, [])

  return (
    <div className='w-[100vw] h-[60vh] absolute bottom-0 rounded-t-lg reverse-dropshadow bg-white'>
        <Tabs defaultValue="account" className="flex flex-col justify-center items-center">
        <TabsList className='grid w-[70%] grid-cols-2 mt-4 rounded-full'>
            <TabsTrigger ref={activeRef} value="info" className='rounded-full'>Thông tin</TabsTrigger>
            <TabsTrigger value="chapter" className='rounded-full'>Chương</TabsTrigger>
        </TabsList>
        <TabsContent value="info" className='w-full'>
            <div className='flex flex-col px-4'>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <p className='text-md font-semibold'>Super Lovers</p>
                        <p className='text-sm mt-2'>Yaoi, Hài kịch, Lãng mạn</p>
                    </div>
                    <div id="heart">
                        <BsChatHeart className="text-3xl"/>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                    <InfoCard title="Rating" score="4.5"/>
                    <InfoCard title="Chapter" score="1"/>
                    <InfoCard title="Language" score="VN"/>
                </div>
                <div className="flex items-center justify-between mt-6">
                    <p className='text-sm h-[10rem] text-ellipsis	 overflow-hidden'>
                    Haru của tuổi 17 không có hứng thú với việc phải dành kì nghỉ hè ở chốn hoang dã Canada cùng với người mẹ không mấy thân thiết của mình – Haruko . Tới khi anh bị bắt chăm sóc Ren - đứa con nuôi Haruko mới nhận về từ trại mồ côi, anh sẵn lòng nhận trách nhiệm. Haru cố gắng chăm sóc Ren hết sức ân cần, và khoảng cách giữa họ dần thu hẹp lại, chính điều đó đã thôi thúc ý định đưa Ren về Nhật Bản của anh, hi vọng Ren có thể tận hưởng cảm giác của một gia đình thật sự. Nhưng từ trên đỉnh cao của hi vọng ngã xuống chính là vực sâu thăm thẳm của tuyệt vọng…
                    </p>
                </div>
                <div className="flex items-center justify-between mt-6">
                    <CardFooter></CardFooter>
                </div>
            </div>
        </TabsContent>
        <TabsContent value="chapter"  className='w-full'>
                <ChapterList></ChapterList>
            </TabsContent>
        </Tabs>
    </div>
  )
}

export default Description
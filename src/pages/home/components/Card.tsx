import { AspectRatio } from '@/src/components/ui/aspect-ratio'
import { Badge } from '@/src/components/ui/badge'
import { useEffect } from 'react'
import {AiOutlineFieldTime} from "react-icons/ai"
import { Link } from 'react-router-dom'

const Card = () => {
  let minutes = 0;

  useEffect( () => {
    var diff = new Date('2011/10/09 12:00').getTime() - new Date('2011/10/09 00:00').getTime();
    minutes = Math.floor(diff / 1000 / 60);

  },[])

  return (
    <Link to="/detail">
    <AspectRatio ratio={16 / 9} className="bg-muted w-[90vw] rounded-3xl  m-auto">
    <Badge className='absolute right-3 top-4 rounded-full'>Chapter 30</Badge>
    <Badge className='absolute left-3 bottom-4 rounded-full'>Manga</Badge>

    <img
      src="https://cdn.myanimelist.net/images/anime/4/78450.jpg"
      alt="Photo by Drew Beamer"
      
      className="rounded-md object-fit h-full m-auto"
    />
    <div className='flex flex-row justify-between mt-2'>
        <div className='text-white font-semibold'>Super Lovers</div>
        <div className='text-white flex items-center gap-2 flex-row'><AiOutlineFieldTime/>{minutes} mins ago</div>
    </div>
  </AspectRatio>
  </Link>
  )
}

export default Card
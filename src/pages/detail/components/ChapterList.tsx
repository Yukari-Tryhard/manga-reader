import { Button } from "@/src/components/ui/button"
import { Link } from 'react-router-dom'



const ChapterList = () => {
  return (
    <div className="flex flex-col w-full items-center gap-1 pt-4">
        <Button className='w-[95%] rounded-none'>
          <Link to={`/read?chapter=${30}`}>Vol 10 chap 30: Chuyện gì sẽ xảy ra với Haru?</Link>
        </Button>
    </div>
  )
}

export default ChapterList

import { badgeVariants } from "@/src/components/ui/badge"
import { Link } from 'react-router-dom'

const CategoryList = () => {
  return (
    <div className='flex flex-row justify-around mt-8'>
        <Link className={badgeVariants({ variant: "outline"}) + ''} to={''}>All</Link>
        <Link className={badgeVariants({ })  + '  font-normal'} to={''}>Manhhua</Link>
        <Link className={badgeVariants({ })  + '  font-normal'} to={''}>Manhwa</Link>
        <Link className={badgeVariants({ })  + '  font-normal'} to={''}>Manga</Link>

    </div>
  )
}

export default CategoryList
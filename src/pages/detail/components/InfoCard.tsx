import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/src/components/ui/card"

type InfoCardProps = {
  title: string,
  score: string
}
  
const InfoCard = ({ title, score}: InfoCardProps) => {
  return (
    <Card className='p-0 m-0'>
  <CardHeader className='flex py-2 px-8 flex-col justify-center items-center'>
    <CardTitle className='text-md'>{title}</CardTitle>
    <CardDescription className='text-sm'>{score}</CardDescription>
  </CardHeader>
</Card>

  )
}

export default InfoCard
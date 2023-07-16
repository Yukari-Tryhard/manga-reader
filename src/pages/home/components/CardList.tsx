import Image from "next/image"

import { AspectRatio } from "@/src/components/ui/aspect-ratio"

import React, { useEffect } from 'react'
import Card from "./Card"

const CardList = () => {

  return (
    <div className="flex flex-col w-full align-center justify-center gap-14 mt-8">
        <Card></Card>
    </div>
  )
}

export default CardList
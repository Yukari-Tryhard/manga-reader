import React from 'react'
import {Menu} from './components/Menu'
import CategoryList from './components/CategoryList'
import CardList from './components/CardList'
  
const HomePage = () => {
  return (
    <div className='overflow-x-scroll'>
       <Menu></Menu>
       <CategoryList></CategoryList>
       <CardList></CardList>
    </div>
  )
}

export default HomePage
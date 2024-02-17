import React from 'react'
import Hero from '../Components/Hero'
import Card from '../Components/Card'
import Offerbanner from '../Components/Offerbanner'
import Bestsellerslider from '../Components/Bestsellerslider'
import Newarrivalslider from '../Components/Newarrivalslider'
import ProductList from '../Components/ProductList'

const Home = () => {
  return (
    <>
    <Hero/>
    <Offerbanner/>
    <Card/>
    <Bestsellerslider/>
    <Newarrivalslider/>
    <ProductList/>
    </> 
  )
}

export default Home
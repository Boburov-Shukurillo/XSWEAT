import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Mainlayout = ({filterProduct,setFilterProduct}) => {
  return (
    <>
    <Header filterProduct={filterProduct} setFilterProduct={setFilterProduct}/>
    <Outlet/>
    </>
  )
}

export default Mainlayout
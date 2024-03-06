import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Mainlayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Mainlayout
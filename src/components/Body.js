import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import Head from './Head'

const Body = () => {
  return (
    <>
    <Head/>
  <div className='flex' >
    <SideBar className='w-48'/>
    <div className="w-full">
    <Outlet/>
    </div>
  </div>
  </>
  )
}

export default Body
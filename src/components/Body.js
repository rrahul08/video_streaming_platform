import React from 'react'
import SideBar from './SideBar'
import { useSelector } from 'react-redux'
// import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import Head from './Head'
import FilterBtnList from './FilterBtnList'

const Body = () => {
  const showFilterList = useSelector((store) => store.nav.showFilterList);
  return (
    <>
    <Head/>
  <div className='flex' >
    <SideBar className='w-48'/>
    <div className="w-full">
          {showFilterList && <FilterBtnList />}
    <Outlet/>
    </div>
  </div>
  </>
  )
}

export default Body
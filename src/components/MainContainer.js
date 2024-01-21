import React from 'react'
import VideoContainer from './VideoContainer'
import FilterBtnList from './FilterBtnList'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const showFilterList = useSelector((store) => store.nav.showFilterList);
  return (
    <div className='px-2'>
        {showFilterList && <FilterBtnList />}
        <VideoContainer/>
    </div>
  )
}

export default MainContainer;
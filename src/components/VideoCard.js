import React from 'react';
import { RxDotFilled } from "react-icons/rx";
import moment from 'moment';
import { useSelector } from 'react-redux';
import { kFormatter } from '../utils/constants';


const VideoCard = ({ info,filter }) => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  
  if (!info) {
    return <div>No information available</div>;
  }

  const { snippet, statistics } = info;



  if (!snippet) {
    return <div>No snippet information available</div>;
  }

  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  if (!statistics) {
    return <div>No statistics information available</div>;
  }

  
  const containerClass = isMenuOpen
    ? 'space-y-3 mb-2 md:w-[23rem] md:m-2 md:my-3 cursor-pointer p-1 rounded-lg'  
    : 'space-y-3 mb-2 md:w-[19rem] md:m-3 md:my-3 cursor-pointer p-1 rounded-lg';

  const titleClass = 'font-semibold pb-2';
  

  return (

    <div className={containerClass}>
      <img className='rounded-lg w-full' alt='thumbnail' src={thumbnails?.medium?.url} />
      
      <div className="flex flex-col px-2">
        <h2 className={titleClass}>{title}</h2>
     
        <div className="flex items-center text-xs font-semibold text-gray-500">
          <p>{channelTitle}</p> <RxDotFilled />
          <p>{kFormatter(statistics?.viewCount)} views</p> <RxDotFilled />
          <p>{moment(publishedAt).fromNow()}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

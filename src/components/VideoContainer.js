import React, { useEffect, useState } from 'react';
import { YOUTUBE_API,SEARCH_RESULT_API  }  from '../utils/constants';
import VideoCard from './VideoCard';
import { Link,useSearchParams } from 'react-router-dom';
import ShimmerUI from './ShimmerUI';

const VideoContainer = () => {

const [videos,setVideos] = useState([]);
const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const filter = searchParams.get("filter");

    // Fetch videos from the Youtube API
    const getVideos = async () => {
      const data = await fetch(
        !filter ? YOUTUBE_API : SEARCH_RESULT_API + filter
      );
      const json = await data.json();
      const onlyVideos = json.items.filter((video) => {
        if (!filter) {
          return video.kind === "youtube#video";
        } else {
          return video.id.kind === "youtube#video";
        }
      });
      setIsLoading(false);
      setVideos(onlyVideos);
    };
  
    useEffect(() => {
      setIsLoading(true);
      getVideos().catch((e) => {
        setIsLoading(false);
        setVideos(null);
      });
    }, [searchParams, filter]);
  
    if (isLoading) {
      return <ShimmerUI />;
    }
    if (!videos) {
      return (
        <div className="md:flex md:flex-wrap md:justify-center">
          <div className="mt-48 text-lg text-red-400 bg-gray-100 p-2 rounded-xl shadow-inner">
            Oops! looks like we have exceeded youtube API quota
          </div>
        </div>
      );
    }
  return (
    <div className='flex flex-wrap '>
      {videos.map(video => (<Link key={video.id} to={"/watch?v="+video.id}> <VideoCard key={video.id} info={video}/></Link>))}
      
    </div>
  )
}

export default VideoContainer
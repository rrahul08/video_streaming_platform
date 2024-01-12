import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(closeMenu());
    })
  return (
    <div className='flex flex-col '>
      <div className='px-5 flex '>
    <div>
        <iframe 
    
        width="1000" 
        height="500" 
        src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
        title="Un Oliyile - Lyrical | Captain Miller | Dhanush | GV Prakash | Arun Matheswaran | SJF" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
        </div>
        <div>
          <LiveChat/>
          </div>
          </div>
        <CommentsContainer/>

      
    </div>
  )
}

export default WatchPage;
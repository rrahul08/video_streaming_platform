import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generate } from '../utils/helper';

const LiveChat = () => {

  const [LiveMessage , setLiveMessage] = useState("");

  const dispatch = useDispatch();
  
  const ChatMessages = useSelector((store)=>store.chat.messages);
   

  useEffect(()=>{
    const i = setInterval(()=>{


          dispatch(addMessage({
            name:generate(),
            message:"hello jii hru"
          }));
    },2000)

    return () => clearInterval(i);
  },[])
  return (
    <>
    <div className='ml-2 w-[465px] h-[500px] p-2 border border-black bg-slate-100 rounded-lg overflow-hidden overflow-y-scroll flex flex-col-reverse'>
       {ChatMessages.map((c,i)=>(
        <ChatMessage key={i} name={c.name} message={c.message}/>
       ))}
    </div>
    <form className='w-full p-2 ml-2 border border-black rounded-lg'
     onSubmit={(e)=>{
      e.preventDefault();
      dispatch(
        addMessage({
          name:"Rahul",
          message: LiveMessage,
        })
      )
      setLiveMessage("");
     }}
    
    >
      <input className='px-2 w-80' type='text' value={LiveMessage} onChange={(e)=>{
        setLiveMessage(e.target.value);
      }}/>
      <button className='px-2 m-2 bg-green-100'>Submit</button>
    </form>

    </>
  )
}

export default LiveChat;

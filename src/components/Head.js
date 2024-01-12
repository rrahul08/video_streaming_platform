import React,{useEffect, useRef,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { SEARCH_API} from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import { AiOutlineSearch} from "react-icons/ai";
import { CiSearch } from 'react-icons/ci';
import { Link, useNavigate } from "react-router-dom";
import useTriggerOutsideClick from "../utils/useTriggerOutsideClick";


const Head = () => {
  const [searchQuery , setSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  // const [showSuggestions,setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store)=>store.cache);
 
  
  useEffect(()=>{
   

    const timer  = setTimeout(()=>{

      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else{

      getSearchSuggestions()}},200);
  
    return () => {
      clearTimeout(timer);
    }

  },[searchQuery]);



  const getSearchSuggestions = async () =>{
    const data = await fetch(SEARCH_API + searchQuery);
    const json = await data.json(); 
    setSuggestions(json[1]);

    dispatch(cacheResults({
      [searchQuery] : json[1],
    }));
  }



  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapperRef = useRef(null);
  const navigate = useNavigate();
  useTriggerOutsideClick(wrapperRef, () => {
    setIsSearchBoxOpen(false);
  });

  

  return (
     <div className='grid grid-flow-col  p-1 shadow-lg justify-between'>
        <div className='flex   '>
            <img 
            onClick={toggleMenuHandler}
            className='h-6 m-2 cursor-pointer' alt='menu' src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png'/>
            <a href="/">
            <img className='h-6 m-2' alt='utube' src="data:image/png;base64,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"/>
            </a>
        </div>
        <div className='pt-2'>
          <div className='flex '>
            <input className='bg-gray-100 outline-blue-400 rounded-full h-7 p-2  m-1 w-full md:p-2 md:bg-white md:border-2 md:rounded-r-none md:mr-0 md:w-[35rem]'
             type='text'
            
             onKeyDown={(e) => {
              if (e.keyCode === 13) {
                navigate(`results/?search_query=${e.target.value}`);
              }
            }}
             onChange={(e)=>{setSearchQuery(e.target.value);
              setIsSearchBoxOpen(true);
            setQuery(e.target.value);}}
             onFocus={()=>setIsSearchBoxOpen(true)}
            //  onBlur={()=>setShowSuggestions(false)}
             placeholder='Search'
             value={query}
             />
             <button className="hidden md:bg-gray-100 h-7 pt-1 md:block p-[0.61rem] text-xl mt-1 rounded-full rounded-l-none border-2 border-l-0">
          <CiSearch />
        </button>
            </div>
            {isSearchBoxOpen && suggestions.length > 0 && (
        <div
          ref={wrapperRef}
          className="border-2 rounded-xl py-2 w-[35rem] border-gray-100 absolute bg-white font-medium shadow-sm"
        >
          <ul>
            {suggestions.map((item, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    setIsSearchBoxOpen(false);
                    setQuery(item);
                  }}
                >
                  <Link
                    className="flex px-5 py-1 gap-2 items-center hover:bg-gray-100"
                    to={`results/?search_query=${item}`}
                  >
                    <AiOutlineSearch /> {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
        </div>
         {/* <div className="hidden md:block col-span-8">
            <SearchBar
              showSearchBar={showSearchBar}
              setShowSearchBar={setShowSearchBar}
              setSearchQuery={setSearchQuery}
              searchSuggestions={suggestions}
            />
          </div>
          <div className="flex space-x-2 mr-2 md:mr-4 text-xl md:col-span-1">
            <AiOutlineSearch
              className="md:hidden"
              onClick={() => setShowSearchBar(!showSearchBar)}
            />
            <FaUserCircle className="md:text-4xl " />
          </div>
        </div>
    )}
      {showSearchBar && (
        <SearchBar
          showSearchBar={showSearchBar}
          setShowSearchBar={setShowSearchBar}
          setSearchQuery={setSearchQuery}
          searchSuggestions={suggestions}
        />
      )} */}

        <div className='p-1 m-1'>
            <img className='h-7' alt='usericon' src="data:image/png;base64,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"/>
        </div>
      </div>

  )
}


export default Head
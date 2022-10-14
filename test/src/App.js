import './App.css';
import {
  SearchIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon
} from '@heroicons/react/outline';
import { HomeIcon } from "@heroicons/react/solid";
import Post from './Post';

function App() {
  return (
    <div>
      <div className="shadow-sm border-b-2 bg-white sticky top-0 z-50">
        <div className="flex justify-between max-w-5xl mx-4 lg:mx-auto">
          <div className="relative lg:inline-grid w-20 content-center">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
          />
          </div>

          <div className="mas-w-xs">
            <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute insert-y-0 pl-3 flex items-center-pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500"/>
            </div>
            <input 
            className="bg-gray-50 block w-full pl-10 sm:text-smborder-gray-300 focus:ring-black focus:border-black rounded-md"
            type="text" 
            placeholder="Search"
            />
          </div>
        </div>
        
        <div className="flex item-center justify-end space-x-4 ">
          <HomeIcon className="h-11 w-7 cursor-pointer hover:scale-125 transition-all duration-150 ease-out"/>
          <PaperAirplaneIcon className="h-10 w-7 rotate-45 cursor-pointer hover:scale-125 transition-all duration-150 ease-out"/>
          <PlusCircleIcon className="h-11 w-7 cursor-pointer hover:scale-125 transition-all duration-150 ease-out"/>
          <UserGroupIcon className="h-11 w-7 cursor-pointer hover:scale-125 transition-all duration-150 ease-out"/>
          <HeartIcon className="h-11 w-7 cursor-pointer hover:scale-125 transition-all duration-150 ease-out"/>

          <img
            src="https://play-lh.googleusercontent.com/CWzqShf8hi-AhV9dUjzsqk2URzdIv8Vk2LmxBzf-Hc8T-oGkLVXe6pMpcXv36ofpvtc=w240-h480-rw"
            alt="profile pic"
            className="h-10 w-10 rounded-full cursor-pointer"
          />

        
        </div>
      </div>    
      
      </div>
        <Post/>
      </div>
    
  );
}

export default App;

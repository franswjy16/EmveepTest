import './App.css';
import Post from './Post';
import {
  SearchIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon
} from '@heroicons/react/outline';
import { HomeIcon } from "@heroicons/react/solid";

function App() {
  return (
    <div className="app">
      <div className="app_header">
        <img
        className="app_headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt=""
        />

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
        
        <div className="flex item-center justify-end space-x-4">
          <HomeIcon className="h-7 w-7 cursor-pointer hover:scale-125 transition-all duration-150 ease-out"/>
          <PaperAirplaneIcon className="h-7 w-7 cursor-pointer hover:scale-125 transition-all duration-150 ease-out"/>
          <PlusCircleIcon className="h-7 w-7 cursor-pointer hover:scale-125 transition-all duration-150 ease-out"/>
          <UserGroupIcon className="h-7 w-7 cursor-pointer hover:scale-125 transition-all duration-150 ease-out"/>
          <HeartIcon className="h-7 w-7 cursor-pointer hover:scale-125 transition-all duration-150 ease-out"/>

          <img
            src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"
            alt="profile pic"
            className="h-10 w-10 rounded-full cursor-pointer"
          />
        </div>

      </div>

      
     
      <Post username="Hana" caption="Feeling Good with The Sun" imageUrl="https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"/>
      
    </div>
  );
}

export default App;

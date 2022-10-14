import faker from "faker";
import { useEffect, useState } from "react";


function Stories() {
  const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
     const suggestions = [...Array(20)].map((_, i) => ({
        ...faker.helpers.contextualCard(),
        id: i,
     }));

     setSuggestions(suggestions);
    }, []);

 console.log(suggestions)

  return (
    <div className="flex space-x-2 p-6 bg-white border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-white">
      {suggestions.map((profile) => 
        <div>
        <img className="h-14 w-14 rounded-full p-[2px] border-red-500 border-2 object-contain cursosr-pointer hover:scale-10 transition transform duration-200 ease-out" src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg" alt="" />
        <p className="text-xs w-14 truncate text-center">{profile.username}</p>
    </div>
      )}
    </div>
  )
}

export default Stories
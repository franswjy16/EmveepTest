import Feed from "./Feed";
import foto from './asset/34269.jpg'
import fotoo from './asset/34122.jpg'
import footo from './asset/34634.jpg'


const feeds = [
  {
    id:"123",
    username: "Maulkeren",
    userImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/576px-Albert_Einstein_Head.jpg",
    img: fotoo,
    caption: "***",
  },  
  {
    id:"123",
    username: "kerami",
    userImg: foto,
    img: footo,
    caption: "vintage",
  }
]

function Feeds() {
  return (
    <div>
      {feeds.map((post) => (
        <Feed 
        key={post.id}
        id={post.id}
        username={post.username}
        userImg={post.userImg}
        img={post.img}
        caption={post.caption}
        />
      ))}

    </div>
  )
}

export default Feeds
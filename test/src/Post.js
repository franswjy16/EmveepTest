import React from 'react'
import './Post.css';

function Post() {
  return (
    <div classname="post">
        <h3>Username</h3>

        <img classname="post_image" 
        src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg" 
        alt=""
        />

        <h4 className="post_text"><strong>Hana</strong> Feeling Good with The Sun</h4>
    </div>
  )
}

export default Post
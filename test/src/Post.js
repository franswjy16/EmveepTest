import React from 'react'; 
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl }) {
  return (
    <div classname="post">
      <div classname="post_header">
        <Avatar
          classname="post_avatar"
          alt='Hana'
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>

      <img classname="post_image" src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg" alt=""/>

      <h4 className="post_text"><strong>{username}</strong> {caption}</h4>
    </div>
  )
}

export default Post
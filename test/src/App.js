import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">
      <div className="app_header">
        <img
        className="app_headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt=""
        />
      </div>

      <Post username="Hana" caption="Feeling Good with The Sun" imageUrl="https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"/>
      <Post username="Maul" caption="XXX" imageUrl=""/>
      
    </div>
  );
}

export default App;

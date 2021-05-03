import React from 'react';
import './App.css';
import image from './image1.jpg';
import'./style.css';

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
      <h1 className="title red">mohamed aloui</h1>
      <br />
      <h3> This is an image in source </h3>

<img src={image} className="image"  alt="myPhoto"/>
<br />
<h3> This is an image in public </h3>

<img src="/image.jpg"className='image' alt='myPhoto'/>

      </div>
      <video  src="/rcb.mp4.mp4" type="video/mp4" 
   width="320" height="240" controls>
   </video>

    </div>
  );
}

export default App;

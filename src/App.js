
import './App.css';
import './index.css';
import image1 from './images/man sweeping.jpg';
import image2 from './images/broom.jpg';
import image3 from './images/community cleaning.jpg';
import image4 from './images/thrash cans.jpg';
import { useState } from 'react';
import video from './images/community.mp4'
import health from './images/health.jpg'
import bookmark from './images/bookmark.jpg'
import government from './images/government.jpg'
import water from './images/water.jpg'
function App() {
  let [toggle, setToggle] = useState(false)
  function navBar() {
setToggle(!toggle)
  }
  return (
   <>
   <nav className='intro'>
    <div className='container'>
    <div className='logo'>
      Cleaning
      
    </div>
    <div className='intro_info'>
      <h3>Be a part of<br></br> the community</h3>
      <br></br>
      <p>Join us on our quest with<br></br> a thousand more community members in<br></br> cleaning our beautiful country.</p>
      <br></br>
      <button className='join'>
        Join
      </button>
    </div>
    <a id='button' onClick={navBar}>
      <span className='bar'></span>
      <span className='bar'></span>
      <span className='bar'></span>
    </a>
    <div className={toggle ?'links' : 'offlink'}>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact</a></li>
        <a id='button' onClick={navBar}>
      <span className='bar'></span>
      <span className='bar'></span>
      <span className='bar'></span>
    </a>
      </ul>
    </div>
    <br></br>
   
    </div>
   </nav>
   <div className='know_container'>
   <div className='know'>
    <section>
    <img src={image1}></img>
    </section>
    <section id='know_section'>
    <h6>Know about us</h6>
    <br></br>
      <h3>Equipment already available </h3>
      <br></br>
      <p>Our cleaning is made easier with the latest in tech cleaning equipment so you can enjoy what you love with a little effort</p>
    <br></br>
    <ul>
        <p><li>Mowers</li></p>
        <li>Spades</li>
        <li>Axes</li>
      </ul>
      <br></br>
      <button >
      Join
    </button>
    </section>
   </div>
   
   </div>
   <div className='essential_cover'>
   <h3>Our program offers:</h3>
   <div className='essential'>
    
    <section id={toggle ? 'program_on1' : 'program_off1'}>
<img src={water}></img>
<p>Our program has saved in money collected from recycling to help treat water issues</p>
<img src={government} className='hide'></img>
<p className='hide'>100% trusted</p>
    </section>
    <section id={toggle ? 'program_on2': 'program-off2'}>
    <img src={health}></img>
<p>Our program collects money from the government to provide healthcare services</p>
<img src={bookmark} className='hide'></img>
<p className='hide'>We have cleaned 100 areas</p>
    </section>
    <section>
      <video controls className={toggle ? "off_video" : "on_video"}>
        <source src={video} type='video/mp4'></source>
      </video>

    </section>
   </div>
   </div>
   <div className='refresh'>
   
   </div>
   <div className='recycle'>
    <h3>Help us donate friend,<br></br>what are you waiting for</h3>
    <br>
    </br>
    <br></br>
    <button>
      Donate
    </button>
   </div>
   <div className='another'>
    <section>
<p>We have everything to start cleaning</p>
<p>Work is easily done with our equipments</p>
<p>Paired in teams of cleaners</p>
    </section>
    <section>
<img src={image2}></img>
    </section>
    <section>
<p>The organisation is very well known</p>
<p>Meet our qualified team of experts</p>
<p>Feel free to join us anytime youi want</p>
    </section>
   </div>
   <div className='contact'>
    <div className='grey'>
      <div className='letter'>
        <h4>Sign up newsletter today</h4>
      </div>
      <br></br>
      <img src={image4}></img>
      <p>Need help?
        <br></br>
      0607173434
      <br></br>
      contact info:
    <br></br>
     cleaning@gmail.com<br></br>
    
     7Fr road Bertrams<br></br>
    
  
     if you could not access us
     
     online please visit our office
   
      </p>
      <img src={image3}></img>
    </div>
   </div>
   </>
  );
}

export default App;

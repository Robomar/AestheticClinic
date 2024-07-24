import React from 'react';
import Header from '../components/Header';
import Image from '../pics/L.png';
import CardContainer from '../components/CardContainer'; 
import './SereneAcademy.css'
import Footer from '../components/Footer';


function Home() {
  return (
    <div className="App">
      <Header />
      <img style={{width:"100%", height:"100%"}} src={Image} alt=""/>
      <p style={{justifyContent:"center", fontSize:"44px", justifySelf:"center", fontWeight:"bold", color:" rgb(153, 2, 2)" }}>Serene Academy</p>
      <CardContainer/>
      <form>
      <div>
        <p className='coursereg'>Course Registeration</p>
        <label>Name *</label>
        <div className="name-fields">
          <input type="text" placeholder="First" />
          <input type="text" placeholder="Last" />
        </div>
      </div>
      <div>
        <label>Email *</label>
        <input type="email" />
      </div>
      <div>
        <label>Our CPD Courses *</label>
        <select>
          <option>Level 7 Diploma in Beauty Therapy - QLS Endorsed</option>
          <option>Beauty Therapy and Make-Up (Online) - CPD Accredited</option>
          <option>Level 3 Diploma in Beauty Therapy - CPD Certified Training</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
        <label>Where did you hear about Us *</label>
        <div>
          <label>
            <input type="radio" name="source" value="Facebook" />
            Facebook
          </label>
          <label>
            <input type="radio" name="source" value="Instagram" />
            Instagram
          </label>
          <label>
            <input type="radio" name="source" value="Indeed" />
            Indeed
          </label>
          <label>
            <input type="radio" name="source" value="Others" />
            Others
          </label>
        </div>
      </div>
      <div>
        <label>Message *</label>
        <textarea rows="4"></textarea>
      </div>
      <button type="submit">Submit Application</button>
    </form>
    
    <Footer/>
    
    </div>
  );
}

export default Home;

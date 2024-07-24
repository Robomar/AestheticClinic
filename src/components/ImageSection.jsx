import React from 'react';
import './ImageSection.css';
import Mainpage from '../pics/mainpage.png';
import {motion} from 'framer-motion';

const ImageSection = () => {
  return (
    <section className="image-section">
      <div className="content"> 
        <motion.p animate={{opacity: 1, y:20 }} transition={{ duration: 0.5, delay: 0.1 }}>Experince Serenity, Reveal Your Beauty</motion.p>
       
        <img src={Mainpage} alt="Beauty" />
      </div>
    </section>
  );
}

export default ImageSection;

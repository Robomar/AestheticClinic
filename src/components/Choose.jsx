import React, { useEffect, useState } from 'react';
import './Choose.css';
import one from '../pics/Aesthetic Clinic in London.jpg';
import two from '../pics/Medical Aesthetics Canada.jpg';
import three from '../pics/Radiofrequency treatment in Queens, NY.jpg';
import four from "../pics/Top 5 Aesthetic Clinics In Singapore_ Enhancing Beauty With Precision.jpg";
import { motion } from 'framer-motion';

const boxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Choose = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.boxes-container');
      if (element) {
        const top = element.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="responsive-container">
      <div className="why-choose-us">
        <h1>Why Choose Us?</h1>
      </div>
      <div className="boxes-container">
        <motion.div
          className="box"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={boxVariants}
        >
          <img src={one} alt='' />
          <h2>Experienced Professionals</h2>
          <p>Our team consists of highly qualified and experienced aestheticians who are passionate about skincare and committed to providing exceptional service.</p>
        </motion.div>
        <motion.div
          className="box"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={boxVariants}
        >
          <img src={two} alt='' />
          <h2>Personalized Approach</h2>
          <p>We believe in personalized care. We take the time to understand your unique skin concerns and develop a treatment plan tailored to your specific needs.</p>
        </motion.div>
        <motion.div
          className="box"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.6 }}
          variants={boxVariants}
        >
          <img src={three} alt='' />
          <h2>Cutting-Edge Technology</h2>
          <p>We utilize the latest advancements in aesthetics technology to deliver the most effective and safe treatments available.</p>
        </motion.div>
        <motion.div
          className="box"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.8 }}
          variants={boxVariants}
        >
          <img src={four} alt='' />
          <h2>Relaxing Environment</h2>
          <p>Our spa offers a tranquil and luxurious atmosphere, allowing you to unwind and escape the stresses of everyday life.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Choose;

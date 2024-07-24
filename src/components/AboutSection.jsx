import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './AboutSection.css';
import image from '../pics/Acne.jpg';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controlsText = useAnimation();
  const controlsImage = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.about-section');
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

  useEffect(() => {
    if (isVisible) {
      controlsText.start({ opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } });
      controlsImage.start({ opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } });
    } else {
      controlsText.start({ opacity: 0, x: -50 });
      controlsImage.start({ opacity: 0, x: 50 });
    }
  }, [isVisible, controlsText, controlsImage]);

  return (
    <motion.section
      className="about-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h1>Serene Skincare Aesthetics Clinic & Wellness Centre</h1>
      <div className="about-container">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          animate={controlsText}
        >
          <h2>About Us</h2>
          <p>
            At Serene Skin Aesthetics & Wellness Centre, we are dedicated to providing a luxurious and rejuvenating experience. Our team of experienced professionals is committed to helping you achieve your skincare goals and promote overall wellness. We offer a wide range of aesthetic treatments, from facials and peels to microneedling and laser hair removal. Let us help you discover your most confident and radiant self.
          </p>
        </motion.div>
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          animate={controlsImage}
        >
          <img src={image} alt="Before and After Treatment" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;

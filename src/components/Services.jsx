import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Service.css';

const Service = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.services-section');
      if (element) {
        const top = element.getBoundingClientRect().top;
        const bottom = element.getBoundingClientRect().bottom;
        const isVisible = top < window.innerHeight && bottom >= 0;
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
      controls.start({ opacity: 1, y: 0, transition: { delay: 0.3 , duration: 0.6 } });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  }, [isVisible, controls]);

  return (
    <motion.section
      className="services-section"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      <h2>Our Services</h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        We offer a comprehensive menu of aesthetic treatments designed to address a variety of skin concerns. Explore some of our most popular services:
      </motion.p>
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <li><strong>Facials:</strong> Deep cleansing, hydrating, anti-aging, and acne-treating facials tailored to your unique skin needs.</li>
        <li><strong>Chemical Peels:</strong> Gentle to moderate peels to improve skin texture, tone, and reduce signs of aging.</li>
        <li><strong>Microneedling:</strong> Minimally invasive treatment to stimulate collagen production for smoother, firmer skin.</li>
        <li><strong>Botox & Fillers:</strong> Reduce wrinkles, fine lines, and enhance facial features for a more youthful appearance (**Disclaimer: Consult a healthcare professional for suitability**).</li>
        <li><strong>Laser Hair Removal:</strong> Long-lasting hair reduction for a variety of skin tones and hair types.</li>
      </motion.ul>
      <motion.button
        className="appointment-button"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Book an Appointment
      </motion.button>
    </motion.section>
  );
};

export default Service;

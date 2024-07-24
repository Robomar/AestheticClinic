import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './CardStyles.css';

const cardsData = [
  {
    title: "Level 7 Diploma in Beauty Therapy – QLS Endorsed",
    description: "Advance your beauty therapy skills with our Level 7 Diploma, endorsed by QLS. This comprehensive course covers advanced techniques and knowledge, preparing you for a successful career in beauty therapy."
  },
  {
    imageUrl: ,
    title: "Beauty Therapy and Make-Up (Online) – CPD Accredited",
    description: "This online course is perfect for those looking to enhance their beauty therapy and make-up skills from the comfort of their home. Accredited by CPD, it offers flexible learning opportunities."
  },
  {
    title: "Diploma in Dermatology & Skincare at QLS Level 5",
    description: "Our Level 5 Diploma in Dermatology & Skincare provides in-depth knowledge and practical skills in skin care and dermatology, endorsed by QLS. Ideal for those pursuing a specialized career in skincare."
  },
  {
    title: "Level 3 Diploma in Beauty Therapy – CPD Certified Training",
    description: "Begin your journey in beauty therapy with our Level 3 Diploma. This CPD certified course covers essential beauty therapy techniques and knowledge, setting the foundation for your career."
  },
  {
    title: "Level 5 Diploma in Dermatology & Skincare – QLS Endorsed",
    description: "Our QLS endorsed Level 5 Diploma offers advanced training in dermatology and skincare, equipping you with the expertise needed to excel in the skincare industry."
  },
  {
    title: "Aesthetics Skincare – CPD Certified",
    description: "This CPD certified course in Aesthetics Skincare provides comprehensive training in advanced skincare techniques, perfect for professionals looking to expand their skills."
  }
];

const Card = ({ title, description, isVisible }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [isVisible, controls]);

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
};

const CardContainer = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  const handleScroll = () => {
    const cards = document.querySelectorAll('.card');
    const visibilityArray = Array.from(cards).map(card => {
      const rect = card.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    });
    setVisibleCards(visibilityArray);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <p className='courses'>Our CPD Certified Courses</p>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} isVisible={visibleCards[index]} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;

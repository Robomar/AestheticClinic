import React from 'react';
import Header from '../components/Header';
import ImageSection from '../components/ImageSection';
import About from '../components/AboutSection';
import Choose from '../components/Choose';
import Service from '../components/Services';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="App">
      <Header />
      <ImageSection />
      <About/>
      <Choose/>
      <Service/>
      <Footer/>
    
    </div>
  );
}

export default Home;

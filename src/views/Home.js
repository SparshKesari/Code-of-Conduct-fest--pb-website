import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import CodeofConduct from '../components/sections/CodeofConduct';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
    

      <CodeofConduct invertMobile topDivider imageFill className="illustration-section-02" />
    
    </>
  );
}

export default Home;

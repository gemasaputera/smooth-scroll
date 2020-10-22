import React, { useState } from 'react';
import SideBar from 'components/SideBar';
import Navbar from 'components/Navbars';
import HeroSection from 'components/HeroSection';
import InfoSection from 'components/InfoSection';
import ServicesSection from 'components/ServicesSection';
import { data } from 'components/InfoSection/Data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <ServicesSection />
      {
        data.map((item, index)=>{
          return(
            <InfoSection {...item.value} key={index} />
          );
        })
      }
    </>
  )
}

export default Home

import React from 'react';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  dataServices
} from './ServiceElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        {
          dataServices.map((item, index)=>{
            return(
              <ServicesCard key={index}>
                <ServicesIcon src={item.icon} />
                <ServicesH2>{item.title}</ServicesH2>
                <ServicesP>{item.description}.</ServicesP>
              </ServicesCard>
            );
          })
        }
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;

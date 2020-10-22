import React, { useState } from 'react';
import {
  HeroContainer,
  HeroBackground,
  VideoBackground,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';
import { Button } from 'components/ButtonElement';
import Video from './../../videos/video.mp4';

const HeroSection = () => {
  const [hover,setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <HeroContainer>
      <HeroBackground>
        <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBackground>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>Sign up for a new account today and receive $250 in credit
          towards your next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true">Get Started {hover ? <ArrowForward />: <ArrowRight />}</Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection

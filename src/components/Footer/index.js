import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkWrapper,
  FooterLinkItem,
  FooterLinkTitle,
  FooterLink,
  dataFooter,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconsLink,
  socialData,
} from './FooterElements';

const FooterSection = () => {
  
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinkWrapper>
            {
              dataFooter.map((item, index)=>{
                return(
                  <FooterLinkItem key={index}>
                    <FooterLinkTitle>{item.titleFooter}</FooterLinkTitle>
                    {
                      item.menu.map((item,index)=>{
                        return(
                        <FooterLink key={index} to={item.route}>{item.title}</FooterLink>
                        );
                      })
                    }
                  </FooterLinkItem>
                );
              })
            }
          </FooterLinkWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              dolla
            </SocialLogo>
            <WebsiteRights> dolla &copy; 2020 {new Date().getFullYear()}
            All rights reserved.</WebsiteRights>
            <SocialIcons>
              {
                socialData.map((item,index)=>{
                  return(
                    <SocialIconsLink href={item.url} target="_blank" aria-label={item.title} key={index}>
                      {
                        index===0?(<FaFacebook />):(index===1?(<FaInstagram />):(index===2?(<FaYoutube />):(index===3?(<FaTwitter />):(<FaLinkedin />))))
                      }
                    </SocialIconsLink>
                  );
                })
              }
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default FooterSection

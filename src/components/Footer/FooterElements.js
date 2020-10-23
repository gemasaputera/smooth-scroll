import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinkWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  
  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const FooterLinkItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #FFF;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #FFF;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #FFF;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconsLink = styled.a`
  color: #FFF;
  font-size: 24px;

  &:hover {
    color: #01bf71;
  }
`;

export const dataFooter = [
  {
    titleFooter: 'About Us',
    menu: [
      {
        route: '/signin',
        title: 'How it works'
      },
      {
        route: '/',
        title: 'Testimonials'
      },
      {
        route: '/',
        title: 'Careers'
      },
      {
        route: '/',
        title: 'Investors'
      },
      {
        route: '/',
        title: 'Term of services'
      },
    ]
  },
  {
    titleFooter: 'Contact Us',
    menu: [
      {
        route: '/',
        title: 'Contact'
      },
      {
        route: '/',
        title: 'Support'
      },
      {
        route: '/',
        title: 'Destinations'
      },
      {
        route: '/',
        title: 'Sponsorships'
      },
    ]
  },
  {
    titleFooter: 'Videos',
    menu: [
      {
        route: '/',
        title: 'Submit Video'
      },
      {
        route: '/',
        title: 'Ambassadors'
      },
      {
        route: '/',
        title: 'Agency'
      },
      {
        route: '/',
        title: 'Influencer'
      },
    ]
  },
  {
    titleFooter: 'Social Media',
    menu: [
      {
        route: '/',
        title: 'Instagram'
      },
      {
        route: '/',
        title: 'Facebook'
      },
      {
        route: '/',
        title: 'Youtube'
      },
      {
        route: '/',
        title: 'Twitter'
      },
    ]
  },
];

export const socialData = [
  {
    url: '/',
    title: 'Facebook'
  },
  {
    url: '/',
    title: 'Instagram'
  },
  {
    url: '/',
    title: 'Youtube'
  },
  {
    url: '/',
    title: 'Twitter'
  },
  {
    url: '/',
    title: 'LinkedIn'
  },
]
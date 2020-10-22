import React from 'react';
import { Button } from 'components/ButtonElement';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from './InfoElements';

const InfoSection = ({ id }) => {
  return (
    <>
      <InfoContainer id={id} lightBg="true">
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>
                  TopLine
                </TopLine>
                <Heading>Heading</Heading>
                <Subtitle darkText="true">Subtitle</Subtitle>
                <BtnWrap>
                  <Button to="home">Button</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection

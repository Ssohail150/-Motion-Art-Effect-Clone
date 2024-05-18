// src/components/InfoSection.js
import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;

const LeftSide = styled.div`
  align-self: flex-start;
  margin-bottom: 20px;
`;

const InfoSpan = styled.span`
  background: linear-gradient(90deg, #F87516 0%, #5E11FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
`;

const InfoParagraph = styled.p`
  font-size: 18px;
  margin: 10px 0;
  color : #EEE5FF;
`;

const CenterHeading = styled.h1`
  text-align: center;
  font-size: 36px;
  margin: 20px 0;

  span {
  background: linear-gradient(90deg, #F87516 0%, #5E11FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

`;

const CenterParagraph = styled.p`
  text-align: center;
  font-size: 18px;
  max-width: 600px;
`;

const InfoSection = () => {
  return (
    <InfoContainer>
      <LeftSide>
        <InfoSpan>Transform Your Website</InfoSpan>
        <InfoParagraph>With Motion Art Effect</InfoParagraph>
      </LeftSide>
      <CenterHeading>
      Attract Your Visitors Attention With Colorful <span>Motion Art Effect</span>
      </CenterHeading>
      <CenterParagraph>
      Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website. 
      </CenterParagraph>
    </InfoContainer>
  );
};

export default InfoSection;

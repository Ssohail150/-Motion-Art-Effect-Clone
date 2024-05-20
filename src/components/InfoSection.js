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
  margin-right: 40px; /* Add margin to the right for spacing */
  text-align: left; /* Ensure text is left-aligned */
  line-height: 1.5rem;
`;

const InfoSpan = styled.span`
  display: block;
  background: linear-gradient(90deg, #F87516 0%, #5E11FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  margin-bottom: 10px;  
  font-size: 18px;
`;

const InfoParagraph = styled.p`
  font-size: 18px;
  margin: 0;
  color: #EEE5FF;
`;

const CenterHeading = styled.h1`
  color: #EEE5FF;
  text-align: left;
  font-size: 55px;
  margin: 20px 0;
  max-width: 557px;

  span {
    background: linear-gradient(90deg, #F87516 0%, #5E11FF 100%);
    font-size: 55px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }
`;

const CenterParagraph = styled.p`
  line-height: 1.5rem;
  font-size: 18px;
  max-width: 557px;
  color: #EEE5FFBD;
`;

const InfoSection = () => {
  return (
    <InfoContainer>
      <LeftSide>
        <InfoSpan>Transform Your Website</InfoSpan>
        <InfoParagraph>With Motion Art Effect</InfoParagraph>
      </LeftSide>
      <CenterHeading>
        Attract Your Visitors Attention With Colorful <br /><span>Motion Art Effect</span>
      </CenterHeading>
      <CenterParagraph>
        Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website. 
      </CenterParagraph>
    </InfoContainer>
  );
};

export default InfoSection;

// src/components/RectangleBox.js
import React from 'react';
import styled from 'styled-components';

const BoxContainer = styled.section`
  padding: 20px;
  background-color: transparent;
  background-image: linear-gradient(180deg, #0D061F 0%, #251E35 100%);  
  text-align: center;
  align-items: center;
  border: 2px solid #6f6f6f;
  border-radius: 10px;
  margin: 30px auto; /* Added margin */
  max-width: 90%; /* Added max-width */
  height : 250px;
`;

const BoxHeading = styled.h2`
  font-size: 25px;
  margin-bottom: 10px;
  color : #EEE5FF;
`;

const BoxParagraph = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color : #EEE5FFBD;
`;

const BoxImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 10px;
  margin-top : 50px;
`;

const RectangleBox = () => {
  return (
    <BoxContainer>
      <BoxHeading>Supported by All Popular Browsers</BoxHeading>
      <BoxParagraph>Rest assured, Motion Art is designed to be compatible with all major web browsers.</BoxParagraph>
      <BoxImage src="/assets/Box.png" alt="Rectangle Box Image" />
    </BoxContainer>
  );
};

export default RectangleBox;

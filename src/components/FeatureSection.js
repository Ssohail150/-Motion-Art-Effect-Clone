import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 40px 20px;
  background-color: transparent;
  text-align: center;
`;

const SectionHeading = styled.h2`
  font-size: 32px;
  margin-bottom: 40px;
  color: #EEE5FF;
`;

const BoxesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap; /* Enable wrapping on smaller screens */
`;

const Box = styled.div`
  background-image: linear-gradient(180deg, #0D061F 0%, #251E35 100%);
  color: #6f6f6f;
  padding: 20px;
  border: 1px solid #6f6f6f;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1;

  &:nth-child(1) {
    margin-top: 20px; /* Left box offset */
    margin-bottom: 50px;
  }

  &:nth-child(2) {
    margin-top: 50px; /* Right box offset */
  }
`;

const BoxHeading = styled.h2`
  font-size: 25px;
  margin-bottom: 10px;
  color: #EEE5FF;
`;

const BoxParagraph = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #EEE5FFBD;
`;

const BoxImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const FeatureSection = () => {
  return (
    <SectionContainer>
      <SectionHeading>Apply On Any Section Or Enable For Whole Page</SectionHeading>
      <BoxesContainer>
        <Box>
          <BoxHeading>Apply On Any Section Or Enable For Whole Page</BoxHeading>
          <BoxParagraph>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </BoxParagraph>
          <BoxImage src="/assets/feature1.png" alt="Feature One Image" />
        </Box>
        <Box>
          <BoxHeading>Apply On Page</BoxHeading>
          <BoxParagraph>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</BoxParagraph>
          <BoxImage src="/assets/feature2.png" alt="Feature Two Image" />
        </Box>
      </BoxesContainer>
    </SectionContainer>
  );
};

export default FeatureSection;

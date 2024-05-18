import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 40px 20px;
`;

const ContentContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const SectionHeading = styled.h2`
  color: #EEE5FF;
  font-size: 30px;
  margin-bottom: 20px;
`;

const SectionParagraph = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #EEE5FFBD;
`;

const BoxesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* Enable wrapping on smaller screens */
`;

const Box = styled.div`
  flex: 1;
  margin: 10px;
  padding: 20px;
  background-color: transparent;
  background-image: linear-gradient(180deg, #0D061F 0%, #251E35 100%);
  border-radius: 15px;
  border: 2px solid #6f6f6f;
  `;

const BoxImage = styled.img`
  height: 200px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const BoxHeading = styled.h3`
  color: #EEE5FF;
  font-size: 23px;
  margin-bottom: 10px;
`;

const BoxParagraph = styled.p`
  font-size: 18px;
  color: #EEE5FFBD;
`;

const NewFeatureSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <SectionHeading>An All-Round Plugin With Powerful Features</SectionHeading>
        <SectionParagraph>
          Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.
        </SectionParagraph>
      </ContentContainer>
      <BoxesContainer>
        <Box>
          <BoxImage src="/assets/1f.png" alt="Image 1" />
          <BoxHeading>Light Weight</BoxHeading>
          <BoxParagraph>
            Motion Art for Elementor is designed to be lightweight.
          </BoxParagraph>
        </Box>
        <Box>
          <BoxImage src="/assets/2f.png" alt="Image 2" />
          <BoxHeading>100% Responsive</BoxHeading>
          <BoxParagraph>
            Create a consistent visual experience across all devices.
          </BoxParagraph>
        </Box>
        <Box>
          <BoxImage src="/assets/3f.png" alt="Image 3" />
          <BoxHeading>User Friendly Interface</BoxHeading>
          <BoxParagraph>
            Ensure a smooth experience for both applicants and administrators.
          </BoxParagraph>
        </Box>
      </BoxesContainer>
    </SectionContainer>
  );
};

export default NewFeatureSection;

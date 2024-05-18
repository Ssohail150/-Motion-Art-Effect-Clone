import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column; /* Change to column on smaller screens */
  justify-content: space-evenly;
  align-items: center;
  padding: 40px 20px;

  @media (min-width: 768px) {
    flex-direction: row; /* Change to row on larger screens */
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  max-width: 700px;
  margin-bottom: 20px; /* Adjust margin for smaller screens */
  
  @media (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0; /* Remove margin for larger screens */
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  max-width: 500px;
  display: flex;
  justify-content: center; /* Center image on smaller screens */

  @media (min-width: 768px) {
    justify-content: flex-end; /* Align image to the right on larger screens */
  }
`;

const SectionImage = styled.img`
  width: 50%;
  border-radius: 10px;
`;

const SectionHeading = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
`;

const SectionParagraph = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const PurchaseButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 20px 35px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  background-color: #7b3fe4;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a573ed;
  }
`;

const NewSection = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <SectionHeading>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</SectionHeading>
        <SectionParagraph>
        Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.
        </SectionParagraph>
        <PurchaseButton href="#">Purchase From Envato  →</PurchaseButton>
      </ContentWrapper>
      <ImageWrapper>
        <SectionImage src="/assets/NewSection.png" alt="Section Image" />
      </ImageWrapper>
    </SectionContainer>
  );
};

export default NewSection;

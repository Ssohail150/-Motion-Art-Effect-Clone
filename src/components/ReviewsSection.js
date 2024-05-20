// src/components/ReviewsSection.js
import React from 'react';
import styled from 'styled-components';

const ReviewsContainer = styled.section`
  padding: 40px 20px;
`;

const Heading = styled.h2`
  color: #EEE5FF;
  text-align: center;
  font-size: 22px;
  margin-bottom: 40px;
`;

const ReviewsGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;

const ReviewCard = styled.div`
  margin-left: 100px;
  display: flex;
  align-items: flex-start;
  padding: 20px;
  text-align: left;
  max-width: 600px;  // Increase max-width to fit content properly
  flex: 1;
`;

const Logo = styled.img`
  height: auto;
  margin-right: 20px;
  max-width: 100px;
  width: 100px;  // Ensure images don't exceed the designated width
`;

const ReviewDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;

const Stars = styled.img`
  height: auto;
  margin-top: 25px;
  margin-bottom: 10px;
  max-width: 150px;
  width: 150px;  // Ensure stars image fits within the designated width
  align-self: flex-start;
`;

const ReviewParagraph = styled.p`
  font-size: 14px;
  color: #EEE5FFBD;
  margin: 0;
`;

const ReviewsSection = () => {
  const reviews = [
    {
      logo: "/assets/1.png",
      stars: "/assets/star.png",
      text: "4.5 Score, 9 Reviews",
    },
    {
      logo: "/assets/2.png",
      stars: "/assets/star.png",
      text: "4.5 Score, 9 Reviews",
    },
    {
      logo: "/assets/3.png",
      stars: "/assets/star.png",
      text: "4.5 Score, 9 Reviews",
    },
  ];

  return (
    <ReviewsContainer>
      <Heading>Trusted by thousands of users around the world</Heading>
      <ReviewsGrid>
        {reviews.map((review, index) => (
          <ReviewCard key={index}>
            <Logo src={review.logo} alt="Logo" />
            <ReviewDetails>
              <Stars src={review.stars} alt="Star Rating" />
              <ReviewParagraph>{review.text}</ReviewParagraph>
            </ReviewDetails>
          </ReviewCard>
        ))}
      </ReviewsGrid>
    </ReviewsContainer>
  );
};

export default ReviewsSection;

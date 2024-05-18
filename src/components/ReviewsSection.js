// src/components/ReviewsSection.js
import React from 'react';
import styled from 'styled-components';

const ReviewsContainer = styled.section`
  padding: 40px 20px;
`;

const Heading = styled.h2`
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  text-align: left;
  max-width: 300px;
  flex: 1;
`;

const Logo = styled.img`
  height: auto;
  margin-bottom: 10px;
`;

const Stars = styled.img`
  height: auto;
  align-self: flex-end;
  margin-bottom: 10px;
`;

const ReviewParagraph = styled.p`
  font-size: 14px;
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
            <Stars src={review.stars} alt="Star Rating" />
            <ReviewParagraph>{review.text}</ReviewParagraph>
          </ReviewCard>
        ))}
      </ReviewsGrid>
    </ReviewsContainer>
  );
};

export default ReviewsSection;

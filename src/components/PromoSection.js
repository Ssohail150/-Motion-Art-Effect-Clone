// src/components/PromoSection.js
import React from 'react';
import styled from 'styled-components';

const PromoContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: white;
`;

const PromoImage = styled.img`
  margin-left : 25px;
  height: 50px;
  width: auto;
`;

const PurchaseButton = styled.button`
  padding: 15px 35px;
  font-size: 18px;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-right : 25px;
  margin-top : 15px;

  &:hover {
    background-color: #333;
    color: white;
  }
`;

const PromoSection = () => {
  return (
    <PromoContainer>
      <PromoImage src="/assets/MotionArtEffect-logo.png" alt="Promo" />
      <PurchaseButton href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891">Purchase Now</PurchaseButton>
    </PromoContainer>
  );
};

export default PromoSection;

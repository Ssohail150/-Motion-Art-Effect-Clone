// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #262626;
  color: white;
  z-index: 1000;  // Ensure it stays on top
`;


const Logo = styled.img`
  height: 30px;
`;

const BuyNowButton = styled.button`
  
  font-size: 14px;
  padding: 5px 10px;
  font-size: 15px;
  background-color: #28a745;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-right : 30px;

  &:hover {
    background-color: #218838;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="/assets/logo.png" alt="Motion Art Logo" />
      <BuyNowButton href="https://codecanyon.net/checkout/102273594/create_account?_ga=2.87564315.2020860516.1715938537-1391843123.1715938537">BUY NOW</BuyNowButton>
    </HeaderContainer>
  );
};
export default Header;

// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: linear-gradient(90deg, #F87516 0%, #5E11FF 100%);
  height: 10px;
  z-index: 1000; // Ensure it stays on top
`;


const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #E1D9FF
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
  color: #E1D9FF;
  margin-right : 60px;
`;

const FooterLink = styled.span`
  cursor: pointer;
  text-decoration: none;
  color: #E1D9FF

  &:hover {
    color: #aaa;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 Copywrite. All rights reserved by Ssohail</FooterText>
      <FooterLinks>
        <FooterLink>Documentation</FooterLink>
        <FooterLink>Support</FooterLink>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;

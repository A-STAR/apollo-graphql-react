import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

export const Card = styled.section`
  margin-bottom: 50px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  background-color: #fff;
`;

export const Header = styled.header`
  padding: 16px;
  font-size: 14px;
  font-weight: 900;
`;

export const Author = styled.span`
  margin-right: 10px;
  font-weight: 900;
`;

export const Image = styled.img`
  vertical-align: top;
  width: 400px;
`;

export const Footer = styled.footer`
  padding: 16px;
`;

export const Comment = styled.p`
  display: flex;
  margin-bottom: 6px;
`;
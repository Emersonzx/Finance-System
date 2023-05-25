import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    
    
  }
    
 `
 
export const Container = styled.div`
  background: white;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    
    
`;

export const Header = styled.div`
  background: linear-gradient(to right, #09093d, #193283);
  height: 150px;
  text-align: center;
  
`;

export const HeaderText = styled.h1`
  color: white;
  margin: 0;
  padding: 0;
  padding-top: 30px;
`;

export const Body = styled.div`
  margin: auto;
  max-width:800px ;
  margin-bottom: 50px;
`;
